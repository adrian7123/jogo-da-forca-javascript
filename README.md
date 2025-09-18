# 🎮 Jogo da Forca - Terminal Web

Um jogo da forca clássico que roda em um emulador de terminal web, desenvolvido em JavaScript puro.

## 🌟 Características

- **Interface de Terminal Realista**: Emula a experiência de um terminal real no navegador
- **Jogo da Forca Completo**: Com desenho do enforcado e sistema de letras
- **Deploy Automático**: Configurado para GitHub Pages
- **Responsivo**: Funciona em dispositivos móveis e desktop
- **Visual Retrô**: Estilo terminal verde clássico

## 🎯 Como Jogar

1. Acesse o site
2. Digite `start` para iniciar o jogo
3. Digite a palavra secreta (mínimo 3 caracteres)
4. Tente adivinhar as letras ou a palavra completa
5. Você tem 6 tentativas antes de ser enforcado!

## 🛠️ Comandos Disponíveis

- `start` - Iniciar o jogo
- `clear` - Limpar a tela
- `help` - Mostrar ajuda

## 🚀 Estrutura do Projeto

```
forca/
├── index.html          # Página principal
├── styles.css          # Estilos do terminal
├── terminal.js         # Emulador de terminal
├── web-game/           # Jogo adaptado para web
│   ├── game.js
│   ├── forca_render.js
│   ├── people_render.js
│   └── rl.js
├── core/               # Versão original (Node.js)
├── render/
├── utils/
└── .github/workflows/  # GitHub Actions para deploy

## 🌐 Deploy

O projeto está configurado para deploy automático no GitHub Pages através do GitHub Actions. 

### Para fazer o deploy:

1. Faça push do código para o branch `main`
2. Ative o GitHub Pages nas configurações do repositório
3. O site será automaticamente deployado

## 💻 Desenvolvimento Local

Para rodar localmente:

1. Clone o repositório
2. Abra `index.html` em um servidor web local
3. Ou use um servidor simples: `python -m http.server 8000`

## 🎨 Customização

- **Cores**: Modifique as variáveis CSS em `styles.css`
- **Comandos**: Adicione novos comandos em `terminal.js`
- **Jogo**: Modifique a lógica em `web-game/game.js`

## 📝 Licença

Este projeto é open source e está disponível sob a licença MIT.