/**
 * Script para extrair veículos do Portal do Lojista Localiza (estado ES)
 * 
 * INSTRUÇÕES:
 * 1. Abra https://portaldolojista.localiza.com/carros no Chrome
 * 2. Faça login no portal (como lojista)
 * 3. Filtre por Localização e selecione cidades do ES (Serra, Vitória, Vila Velha, etc.)
 * 4. Veja na URL qual parâmetro aparece (ex: cidades=874 ou cidades=874,3661)
 * 5. Abra o DevTools (F12) > aba Console
 * 6. Cole este script, AJUSTE cidadesES abaixo com os códigos corretos, e pressione Enter
 * 7. O JSON será exibido - copie e salve
 * 8. Para usar no site: substitua o array veiculos em dados.js
 * 
 * Códigos comuns do ES (conforme URL do portal): Serra=874, Vitória, Vila Velha, Cariacica...
 */

(async function() {
  // Cole aqui os códigos de cidades do ES da URL (ex: 874 para Serra, ou 874,3661,3205 para várias)
  const cidadesES = '874';
  
  let pagina = 1;
  let todosVeiculos = [];
  const porPagina = 100;

  console.log('Iniciando extração de veículos do ES...');

  while (true) {
    const url = `https://portaldolojista.localiza.com/api/vehicle/get-vehicles?paginaAtual=${pagina}&numeroPorPagina=${porPagina}&ordenarPor=1&ordem=1&cidades=${cidadesES}&OrdenarPelaQuantidadeDeFotos=true`;
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      
      if (!data.vehicles || data.vehicles.length === 0) break;
      
      todosVeiculos = todosVeiculos.concat(data.vehicles);
      console.log(`Página ${pagina}: ${data.vehicles.length} veículos (total: ${todosVeiculos.length})`);
      
      if (pagina >= data.numberOfPages) break;
      pagina++;
      
      await new Promise(r => setTimeout(r, 500)); // pequena pausa entre requisições
    } catch (err) {
      console.error('Erro:', err);
      break;
    }
  }

  // Converter para formato do dados.js
  const formatado = todosVeiculos.map((v, i) => ({
    id: v.id || i + 1,
    marca: (v.brand || '').toUpperCase(),
    modelo: v.modelFamilyDescription || v.model || '',
    versao: v.model || '',
    anoFab: v.manufactureYear || 0,
    anoMod: v.modelYear || v.manufactureYear || 0,
    km: v.odometer || 0,
    preco: v.priceFor || 0,
    cor: v.colorFamily || v.color || '',
    combustivel: v.fuel || 'Flex',
    cambio: (v.transmission || 'Manual').toUpperCase() === 'AUTOMATICO' ? 'Automático' : 'Mecânico',
    motor: '1.0',
    imagem: v.photoUrl || '',
    imagens: v.photoUrl ? [v.photoUrl] : [],
    cidade: (v.store?.cityName || v.store?.name || 'Serra').toUpperCase(),
    estado: v.store?.stateCode || 'ES',
    label: v.category || '',
    descricao: 'Veículo seminovo. Laudo cautelar e quilometragem real.',
    itens: []
  }));

  console.log('\n=== TOTAL:', formatado.length, 'veículos ===\n');
  console.log('Copie o JSON abaixo e cole em dados.js (substitua o array veiculos):\n');
  console.log(JSON.stringify(formatado, null, 2));
  
  return formatado;
})();
