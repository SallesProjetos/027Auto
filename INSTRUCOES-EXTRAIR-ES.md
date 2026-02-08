# Como obter os carros do ES do Portal Localiza

Como a API da Localiza não é acessível externamente, use o script no seu navegador **enquanto está logado** no portal.

## Passo a passo

### 1. Descobrir os códigos das cidades do ES

1. Acesse https://portaldolojista.localiza.com/carros
2. Faça login como lojista
3. Clique em **Localização** no filtro
4. Digite "ES" ou selecione cidades do Espírito Santo (Serra, Vitória, Vila Velha, etc.)
5. Observe a URL do navegador. Algo como:
   - `?cidades=874` (apenas Serra)
   - `?cidades=874,3661,3205` (várias cidades)
6. Anote o valor do parâmetro `cidades=`

### 2. Executar o script

1. Com o portal aberto e logado, pressione **F12** (DevTools)
2. Vá na aba **Console**
3. Abra o arquivo `extrair-veiculos-es.js` deste projeto
4. Na linha `const cidadesES = '874'`, troque `874` pelos códigos que você anotou (ex: `'874,3661,3205'`)
5. Copie o conteúdo inteiro do arquivo
6. Cole no Console e pressione **Enter**

### 3. Usar os dados no site

1. O script exibirá um JSON no console
2. Clique com o botão direito no objeto exibido > **Copy object** ou copie o texto
3. Abra `dados.js` e substitua o array `veiculos` pelo JSON copiado
4. Ajuste a estrutura se necessário (campos como `imagem`, `imagens`, etc.)

## Alternativa: várias cidades

Se quiser todos os veículos do ES, você precisa incluir o código de cada cidade do estado. Para isso:

- Selecione uma cidade por vez no portal e anote o código na URL
- Junte todos com vírgula: `cidadesES = '874,3661,3205,...'`

## Observação

O script só funciona **dentro** do portal, com você logado, pois a requisição é feita no mesmo domínio e usa seus cookies de sessão.
