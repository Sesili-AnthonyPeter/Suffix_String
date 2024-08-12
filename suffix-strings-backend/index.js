// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/add-suffix', (req, res) => {
  const { strings, suffix } = req.body;

  if (!Array.isArray(strings) || typeof suffix !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const suffixedStrings = strings.map(str => str + suffix);
  res.json({ suffixedStrings });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
