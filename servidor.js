const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const tipos = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

const servidor = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0] || '/';
  let arquivo = urlPath === '/' ? 'index.html' : urlPath.replace(/^\//, '');
  arquivo = path.join(__dirname, arquivo);
  const ext = path.extname(arquivo);
  const tipo = tipos[ext] || 'text/plain';

  fs.readFile(arquivo, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Arquivo não encontrado');
    } else {
      res.writeHead(200, { 'Content-Type': tipo });
      res.end(data);
    }
  });
});

servidor.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('Pressione Ctrl+C para parar');
});
