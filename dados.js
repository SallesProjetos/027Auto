/**
 * 027AUTO - Dados mockados (Serra - ES)
 */

const DADOS_027AUTO = {
  // LocalizaÃ§Ã£o padrÃ£o (Serra - ES, cÃ³digo 874)
  localizacao: {
    cidade: "Serra",
    estado: "ES",
    codigo: 874
  },

  // Cidades disponÃ­veis para filtro
  // Digite na busca para filtrar (ex: "es" mostra cidades do ES)
  cidades: [
    { id: 874, nome: "Serra", estado: "ES" },
    { id: 3205309, nome: "VitÃ³ria", estado: "ES" },
    { id: 3205010, nome: "Vila Velha", estado: "ES" },
    { id: 3201308, nome: "Cariacica", estado: "ES" },
    { id: 3200169, nome: "Aracruz", estado: "ES" },
    { id: 3550308, nome: "SÃ£o Paulo", estado: "SP" },
    { id: 3509502, nome: "Campinas", estado: "SP" },
    { id: 3518800, nome: "Guarulhos", estado: "SP" },
    { id: 3548708, nome: "Santo AndrÃ©", estado: "SP" },
    { id: 3547809, nome: "Santos", estado: "SP" },
    { id: 3550704, nome: "Sorocaba", estado: "SP" },
    { id: 3516200, nome: "Franca", estado: "SP" },
    { id: 3543402, nome: "RibeirÃ£o Preto", estado: "SP" },
    { id: 3501608, nome: "Americana", estado: "SP" },
    { id: 3525904, nome: "JundiaÃ­", estado: "SP" },
    { id: 3304557, nome: "Rio de Janeiro", estado: "RJ" },
    { id: 3301702, nome: "Duque de Caxias", estado: "RJ" },
    { id: 3300100, nome: "Angra dos Reis", estado: "RJ" },
    { id: 3106200, nome: "Belo Horizonte", estado: "MG" },
    { id: 3124104, nome: "Contagem", estado: "MG" },
    { id: 3136702, nome: "Juiz de Fora", estado: "MG" },
    { id: 3170206, nome: "UberlÃ¢ndia", estado: "MG" },
    { id: 4106902, nome: "Curitiba", estado: "PR" },
    { id: 4113700, nome: "Londrina", estado: "PR" },
    { id: 4100103, nome: "MaringÃ¡", estado: "PR" },
    { id: 4119905, nome: "Ponta Grossa", estado: "PR" },
    { id: 4314902, nome: "Porto Alegre", estado: "RS" },
    { id: 4313409, nome: "Pelotas", estado: "RS" },
    { id: 4323002, nome: "Santa Maria", estado: "RS" },
    { id: 4314407, nome: "Passo Fundo", estado: "RS" },
    { id: 4205407, nome: "FlorianÃ³polis", estado: "SC" },
    { id: 4202404, nome: "Blumenau", estado: "SC" },
    { id: 4216602, nome: "Joinville", estado: "SC" },
    { id: 5300108, nome: "BrasÃ­lia", estado: "DF" },
    { id: 5208707, nome: "GoiÃ¢nia", estado: "GO" },
    { id: 5201405, nome: "AnÃ¡polis", estado: "GO" },
    { id: 5002704, nome: "Campo Grande", estado: "MS" },
    { id: 5000203, nome: "Aquidauana", estado: "MS" },
    { id: 5103403, nome: "CuiabÃ¡", estado: "MT" },
    { id: 5102678, nome: "Barra do GarÃ§as", estado: "MT" },
    { id: 1302603, nome: "Manaus", estado: "AM" },
    { id: 1501402, nome: "BelÃ©m", estado: "PA" },
    { id: 2304400, nome: "Fortaleza", estado: "CE" },
    { id: 2408102, nome: "Natal", estado: "RN" },
    { id: 2507507, nome: "JoÃ£o Pessoa", estado: "PB" },
    { id: 2611606, nome: "Recife", estado: "PE" },
    { id: 2927408, nome: "Salvador", estado: "BA" },
    { id: 2930709, nome: "SimÃµes Filho", estado: "BA" },
    { id: 2111300, nome: "SÃ£o LuÃ­s", estado: "MA" },
    { id: 2211001, nome: "Teresina", estado: "PI" },
    { id: 2704302, nome: "MaceiÃ³", estado: "AL" },
    { id: 2800308, nome: "Aracaju", estado: "SE" }
  ],

  // Marcas e modelos para filtros
  marcas: [
    { id: "fiat", nome: "Fiat", modelos: ["Argo", "Cronos", "Mobi", "Strada", "Toro", "Uno"] },
    { id: "chevrolet", nome: "Chevrolet", modelos: ["Onix", "Onix Plus", "Tracker", "Cruze"] },
    { id: "volkswagen", nome: "Volkswagen", modelos: ["Polo", "T-Cross", "Nivus", "Saveiro", "Gol"] },
    { id: "renault", nome: "Renault", modelos: ["Kwid", "Sandero", "Duster", "Logan"] },
    { id: "jeep", nome: "Jeep", modelos: ["Renegade", "Compass", "Commander"] },
    { id: "hyundai", nome: "Hyundai", modelos: ["HB20", "HB20S", "Creta"] },
    { id: "ford", nome: "Ford", modelos: ["Ka", "EcoSport", "Ranger"] }
  ],

  // Catálogo de veículos mockados (Serra - ES) - 3 registros para GitHub Pages
  veiculos: [
    {
        "id": 189393,
        "marca": "VOLKSWAGEN",
        "modelo": "SAVEIRO",
        "versao": "ROBUST 1.6 16V TOTAL FLEX MANUAL",
        "anoFab": 2023,
        "anoMod": 2024,
        "km": 10564,
        "preco": 0,
        "cor": "BRANCO",
        "combustivel": "Flex",
        "cambio": "Mecânico",
        "motor": "1.0",
        "imagem": "https://cdn-portal-lojista.localiza.com/prd/portaldolojista/anuncio/189393/90d161c9-ae7f-42ee-adaf-7f18b83ce934.jpg",
        "imagens": [
            "https://cdn-portal-lojista.localiza.com/prd/portaldolojista/anuncio/189393/90d161c9-ae7f-42ee-adaf-7f18b83ce934.jpg"
        ],
        "cidade": "SERRA",
        "estado": "ES",
        "label": "PICK-UP",
        "descricao": "Veículo seminovo 027Auto. Laudo cautelar e quilometragem real. Entre em contato para mais informações.",
        "itens": []
    },
    {
        "id": 225018,
        "marca": "RENAULT",
        "modelo": "KWID",
        "versao": "ZEN 1.0 12V SCE FLEX MANUAL",
        "anoFab": 2024,
        "anoMod": 2025,
        "km": 12177,
        "preco": 0,
        "cor": "VERMELHO",
        "combustivel": "Flex",
        "cambio": "Mecânico",
        "motor": "1.0",
        "imagem": "https://cdn-portal-lojista.localiza.com/prd/portaldolojista/anuncio/225018/68cc1e7f-6523-4cd5-9ce5-c1289321006d.jpg",
        "imagens": [
            "https://cdn-portal-lojista.localiza.com/prd/portaldolojista/anuncio/225018/68cc1e7f-6523-4cd5-9ce5-c1289321006d.jpg"
        ],
        "cidade": "SERRA",
        "estado": "ES",
        "label": "HATCH",
        "descricao": "Veículo seminovo 027Auto. Laudo cautelar e quilometragem real. Entre em contato para mais informações.",
        "itens": []
    },
    {
        "id": 180364,
        "marca": "FIAT",
        "modelo": "MOBI",
        "versao": "LIKE 1.0 8V FLEX MANUAL",
        "anoFab": 2023,
        "anoMod": 2023,
        "km": 20043,
        "preco": 0,
        "cor": "BRANCO",
        "combustivel": "Flex",
        "cambio": "Mecânico",
        "motor": "1.0",
        "imagem": "https://cdn-portal-lojista.localiza.com/prd/portaldolojista/anuncio/180364/4d84c348-a5c8-4cf5-a8f2-d5dbbe644920.jpg",
        "imagens": [
            "https://cdn-portal-lojista.localiza.com/prd/portaldolojista/anuncio/180364/4d84c348-a5c8-4cf5-a8f2-d5dbbe644920.jpg"
        ],
        "cidade": "SERRA",
        "estado": "ES",
        "label": "HATCH",
        "descricao": "Veículo seminovo 027Auto. Laudo cautelar e quilometragem real. Entre em contato para mais informações.",
        "itens": []
    }
  ],

  // Dados de cadastro/lojista (mock)
  cadastro: {
    lojista: {
      nome: "Revenda 027",
      cnpj: "00.000.000/0001-00",
      email: "contato@revenda027.com.br",
      telefone: "(27) 3000-0000",
      endereco: {
        logradouro: "Av. Principal, 1000",
        bairro: "Centro",
        cidade: "Serra",
        estado: "ES",
        cep: "29160-000"
      },
      contratoAtivo: true,
      limiteCredito: 500000
    },
    colaboradores: [
      { id: 1, nome: "João Silva", email: "joao@revenda027.com.br", perfil: "Admin" },
      { id: 2, nome: "Maria Santos", email: "maria@revenda027.com.br", perfil: "Operador" }
    ]
  }
};
