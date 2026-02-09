const http = require('http');
const https = require('https');
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

const API_LOCALIZA = 'https://portaldolojista.localiza.com/api/vehicle/get-vehicles';

const servidor = http.createServer((req, res) => {
  // Proxy da API - /api/veiculos?pagina=1
  const reqPath = (req.url || '').split('?')[0];
  if (reqPath === '/api/veiculos') {
    const params = new URLSearchParams((req.url || '').split('?')[1] || '');
    const pagina = params.get('pagina') || '1';
    const marcas = params.get('marcas') || '';
    let url = `${API_LOCALIZA}?paginaAtual=${pagina}&numeroPorPagina=24&ordenarPor=1&ordem=1&OrdenarPelaQuantidadeDeFotos=true&caracteristicas=3`;
    if (marcas) url += `&marcas=${marcas}`;
    https.get(url, (apiRes) => {
      let data = '';
      apiRes.on('data', chunk => data += chunk);
      apiRes.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        res.end(data);
      });
    }).on('error', () => {
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro ao conectar com a API' }));
    });
    return;
  }

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
