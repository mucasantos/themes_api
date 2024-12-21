const express = require('express');
const cors = require('cors');
const themes = require('./themes.json');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/themes', (req, res) => {
  res.json(themes);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
