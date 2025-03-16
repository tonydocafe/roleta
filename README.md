# Roleta 

## Descrição
Roleta Simples é um projeto web interativo que simula uma roda da fortuna. O jogador pode girar a roleta e obter um valor aleatório como resultado. O jogo foi desenvolvido utilizando HTML, CSS e JavaScript, com suporte da biblioteca Chart.js para renderização da roda.

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (ES6)
- Chart.js
- Chart.js Plugin Datalabels
- Google Fonts

## Estrutura do Projeto
```
|-- src/
|   |-- css/
|   |   |-- style.css
|   |-- js/
|   |   |-- index.js
|   |-- imagens/
|       |-- setinha.png
|-- index.html
|-- README.md
```

## Como Executar
1. Clone este repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em um navegador moderno.
3. Clique no botão "Gire" para girar a roleta.

## Funcionamento
- A roleta é representada graficamente como um gráfico de pizza usando Chart.js.
- O botão "Gire" inicia a animação de rotação.
- Um valor aleatório é gerado para determinar onde a roleta vai parar.
- O resultado é exibido na tela após a roleta parar.

## Personalização
- Para modificar as cores da roleta, edite a variável `pieColors` em `index.js`.
- Para alterar os valores dos setores, modifique `rotationValues`.
- O design pode ser ajustado no arquivo `style.css`.

## Compatibilidade
Este projeto foi testado nos seguintes navegadores:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

## Licença
Este projeto é de uso livre e pode ser modificado conforme necessário.

