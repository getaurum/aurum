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
        body: JSON.stringify(body),
      });
const data = await response.json();
if (data.content) {
  data.content = data.content.map(block => {
    if (block.type === 'text' && block.text) {
      block.text = block.text.replace(/<cite[^>]*>|<\/cite>/g, '');
    }
    return block;
  });
}
return res.status(response.status).json(data);
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
