const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API da Minha Estante (In-Memory) funcionando.' });
});

app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log('Modo: Armazenamento em Memória (Sem MongoDB)');
});
