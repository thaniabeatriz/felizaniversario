const express = require('express');
const path = require('path'); // Módulo para lidar com caminhos de arquivos
const app = express();
const port = 3000;

// Servindo arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
