// Instalando as dependências
// npm install express

const express = require('express');
const app = express();

// Definindo o endpoint "/"
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à nossa API!' });
});

// Definindo o endpoint "/transcribe"
app.get('/transcribe', (req, res) => {
  // Aqui pode ser o local onde você processa a transcrição. 
  // Para o exemplo, estou apenas retornando uma string.
  res.json({ message: 'transcription' });
});

// Definindo o endpoint "/health"
app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

// Iniciando o servidor na porta 8080
app.listen(8080, () => {
  console.log('Aplicativo está escutando na porta 8080!');
});