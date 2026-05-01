function removeCiteTags(obj) {
  if (typeof obj === 'string') {
    return obj
      .replace(/<cite[^>]*>(.*?)<\/cite>/gs, '$1')
      .replace(/<cite[^>]*\/>/g, '');
  }
  if (Array.isArray(obj)) return obj.map(removeCiteTags);
  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, removeCiteTags(v)])
    );
  }
  return obj;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { action, body } = req.body;
  if (action === 'claude') {
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'anthropic-beta': 'web-search-2025-03-05',
        },
        body: JSON.stringify({
          ...body,
          system: "Never use HTML or XML tags in your response including <cite>, <b>, <br>."
        }),
      });
      const data = await response.json();
const cleaned = removeCiteTags(data);
const textBlocks = cleaned.content?.filter(b => b.type === 'text') || [];
const allText = textBlocks.map(b => b.text).join(' ');
const jsonMatch = allText.match(/\{[\s\S]*\}/);
if (!jsonMatch) return res.status(500).json({ error: 'NO_JSON in response' });
const parsed = JSON.parse(jsonMatch[0]);
return res.status(200).json(parsed);
    } catch (error) {
      return res.status(500).json({ error: 'Anthropic API error' });
    }
  }
  if (action === 'subscribe') {
    const { email } = req.body;
    if (!email || !email.includes('@')) return res.status(400).json({ error: 'Invalid email' });
    try {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'api-key': process.env.BREVO_API_KEY },
        body: JSON.stringify({ email, listIds: [2], updateEnabled: true }),
      });
      if (response.status === 201 || response.status === 204) return res.status(200).json({ success: true });
      const data = await response.json();
      if (data.code === 'duplicate_parameter') return res.status(200).json({ success: true });
      return res.status(400).json({ error: 'Subscription failed' });
    } catch (error) {
      return res.status(500).json({ error: 'Brevo API error' });
    }
  }
  return res.status(400).json({ error: 'Unknown action' });
}
