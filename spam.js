export default function handler(req, res) {
  const { word = "SPAM", count = 1 } = req.query;

  let num = parseInt(count);
  if (isNaN(num) || num < 1) num = 1;
  if (num > 50) num = 50;

  const lines = Array(num).fill(word).join("\n");

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.send(lines);
}
