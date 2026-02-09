/**
 * Script Node.js para buscar veículos da API Localiza (Serra - ES) e atualizar dados.js
 * Execute: node atualizar-veiculos-localiza.js
 */

const https = require('https');
const fs = require('fs');

const API_URL = 'https://portaldolojista.localiza.com/api/vehicle/get-vehicles?paginaAtual=1&numeroPorPagina=100&cidades=874';

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function converter(v, i) {
  const cambio = (v.transmission || '').toUpperCase() === 'AUTOMATICO' ? 'Automático' : 'Mecânico';
  const combustivel = (v.fuel || '').includes('ETANOL') || (v.fuel || '').includes('GASOLINA') ? 'Flex' : (v.fuel || 'Flex');
  const store = v.store || {};
  return {
    id: v.id || i + 1,
    marca: (v.brand || '').replace(/\b\w/g, l => l.toUpperCase()),
    modelo: v.modelFamilyDescription || v.model || '',
    versao: v.model || '',
    anoFab: v.manufactureYear || 0,
    anoMod: v.modelYear || v.manufactureYear || 0,
    km: v.odometer || 0,
    preco: v.priceFor || 0,
    cor: (v.colorFamily || v.color || '').replace(/\b\w/g, l => l.toUpperCase()),
    combustivel,
    cambio,
    motor: '1.0',
    imagem: v.photoUrl || '',
    imagens: v.photoUrl ? [v.photoUrl] : [],
    cidade: store.city || 'Serra',
    estado: store.state || 'ES',
    label: v.category || '',
    descricao: 'Veículo seminovo 027Auto. Laudo cautelar e quilometragem real. Entre em contato para mais informações.',
    itens: []
  };
}

async function main() {
  console.log('Buscando veículos da Localiza (Serra - ES)...');
  const data = await fetch(API_URL);
  const vehicles = data.vehicles || [];
  console.log('Encontrados:', vehicles.length, 'veículos');

  const veiculos = vehicles.map((v, i) => converter(v, i));

  const dadosPath = __dirname + '/dados.js';
  let dadosContent = fs.readFileSync(dadosPath, 'utf8');

  const inicio = dadosContent.indexOf('  veiculos: [');
  const fim = dadosContent.indexOf('  ],', inicio) + 4;
  const novoVeiculos = '  veiculos: ' + JSON.stringify(veiculos, null, 4);
  dadosContent = dadosContent.slice(0, inicio) + novoVeiculos + dadosContent.slice(fim);

  fs.writeFileSync(dadosPath, dadosContent);
  console.log('dados.js atualizado com', veiculos.length, 'veículos!');
}

main().catch(err => { console.error(err); process.exit(1); });
