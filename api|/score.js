export default async function handler(req, res) {
  const name = req.query.name || req.query.id || '';
  const googleUrl = "https://script.google.com/macros/s/AKfycbzUhzbm-xpxCoQtJn0ndUsLQfpGEXBmLP2dCs8ky9MkQ2M3_5EKkWHnz99LKc3Fppc5/exec?name=" + encodeURIComponent(name);

  try {
    const response = await fetch(googleUrl);
    const data = await response.json();
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).send(JSON.stringify({ score: data.score || 1500 }));
  } catch (error) {
    return res.status(200).send(JSON.stringify({ score: 1500 }));
  }
}
