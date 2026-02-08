# 027AUTO — Proposta para Cliente

Projeto em HTML estático para apresentação da proposta de portal de venda de carros.

## Estrutura

- **index.html** — Página principal com Hero, Diferenciais, Catálogo em destaque, Como Funciona e Contato
- **carros.html** — Página de catálogo com filtros laterais e listagem de veículos
- **detalhe.html** — Página de detalhes do veículo (ao clicar no card)
- **dados.js** — Catálogo de veículos (atualizado via script da API Localiza)
- **atualizar-veiculos-localiza.js** — Script para buscar veículos da API Localiza (Serra - ES) e atualizar dados.js. Execute: `node atualizar-veiculos-localiza.js`
- **estilos.css** — Estilos com identidade visual 027AUTO (gradiente azul ciano → rosa)

## Como visualizar

1. Abra o arquivo `index.html` no navegador
2. Ou execute um servidor local, por exemplo:
   - **Python:** `python -m http.server 8000`
   - **Node:** `npx serve .`
3. Acesse: http://localhost:8000

## Identidade visual

- Gradiente: azul ciano (#00d4ff) → rosa (#ff00a5)
- Fundo escuro
- Layout inspirado no Portal do Lojista Localiza
