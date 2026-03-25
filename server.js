// Serveur local de développement — utilise la même fonction que Vercel
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Réutilise directement la fonction Vercel
const generateHandler = require('./api/generate');
app.post('/api/generate', generateHandler);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur local sur http://localhost:${PORT}`);
});
