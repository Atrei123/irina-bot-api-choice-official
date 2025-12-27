export default async function handler(req, res) {
  const name = req.query.name || req.query.id || '';
  const googleUrl = "https://script.google.com/macros/s/AKfycbwQCkW_9SOeClBjWYa6bofUGaqD-zcnsR1OoiuVfP-7QpqyBnsZqqBOM77xDlunkaswtQ/exec?name=" + encodeURIComponent(name);

  try {
    const response = await fetch(googleUrl);
    const data = await response.json();
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).send(JSON.stringify({ score: data.score || 1500 }));
  } catch (error) {
    return res.status(200).send(JSON.stringify({ score: 1500 }));
  }
}
