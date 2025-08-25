// api/artstation.js
export default async function handler(req, res) {
  const USER = 'pauleal';
  const URL = `https://www.artstation.com/users/${USER}/projects.json`;
  
  try {
    const response = await fetch(URL); // fetch nativo de Node 18+
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
