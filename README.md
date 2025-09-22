# 🎯 Jogo da Forca - Terminal Edition

> Um clássico jogo da forca implementado em JavaScript para terminal, onde a diversão encontra a programação!

## 🎮 O que é este projeto?

Este é um jogo da forca interativo desenvolvido em JavaScript puro, rodando diretamente no terminal. O projeto demonstra conceitos importantes de programação como:

- **Event-driven architecture** usando EventEmitter
- **Programação assíncrona** com async/await
- **Separação de responsabilidades** entre lógica de jogo e renderização
- **Modularização** com ES6 modules

## 🏗️ Arquitetura do Jogo

### 📁 Estrutura do Projeto

```
forca/
├── core/
│   └── game.js          # 🧠 Cérebro do jogo - lógica principal
├── render/
│   ├── forca_render.js  # 🎨 Renderização da forca visual
│   └── people_render.js # 👤 Renderização do boneco
├── utils/
│   └── rl.js           # ⌨️ Utilitários de entrada do usuário
└── site/               # 🌐 Interface web (se aplicável)
```

### 🎯 Classe Game (`core/game.js`)

A classe `Game` é o coração do projeto, herdando de `EventEmitter` para criar uma arquitetura baseada em eventos. Aqui está o que ela faz:

#### 🚀 Ciclo de Vida do Jogo

1. **Inicialização** (`init()`)

   - Configura os renderizadores
   - Exibe boas-vindas
   - Solicita palavra secreta
   - Inicia o loop principal

2. **Loop Principal** (`render()`)

   - Mantém o jogo ativo enquanto `stated = true`
   - Renderiza o estado atual da forca
   - Escuta entrada do usuário
   - Verifica condições de vitória

3. **Interação do Usuário** (`listenUserInput()`)
   - Usa Promises para capturar entrada assíncrona
   - Processa tentativas de letras/palavras
   - Atualiza estado do jogo

#### 🎨 Sistema de Eventos

O jogo usa um sistema elegante de eventos para comunicação:

```javascript
// Eventos emitidos pela classe Game:
this.emit("clear"); // 🧹 Limpa a tela
this.emit("body", text); // 📝 Exibe texto no corpo
this.emit("question", ">"); // ❓ Faz uma pergunta ao usuário
```

#### ⚡ Recursos Interessantes

- **Validação de Entrada**: Palavra secreta deve ter pelo menos 3 caracteres
- **Estado Reativo**: O jogo responde a mudanças de estado automaticamente
- **Separação de Concerns**: Lógica de jogo separada da renderização
- **Interface Limpa**: Limpa a tela entre estados para melhor UX

## 🎲 Como Funciona

1. **Início**: O jogador é recebido com "Jogo da Forca"
2. **Configuração**: Sistema solicita uma palavra secreta (mín. 3 caracteres)
3. **Gameplay**: Loop infinito onde:
   - Estado atual é renderizado
   - Jogador insere letra/palavra
   - Sistema processa entrada
   - Verifica vitória/derrota
4. **Fim**: Congratula o jogador e revela a palavra

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **ES6 Modules** - Sistema de módulos moderno
- **EventEmitter** - Padrão Observer nativo do Node
- **Async/Await** - Programação assíncrona elegante

## 🎯 Características Técnicas

### Design Patterns Implementados

- **Observer Pattern**: Via EventEmitter para comunicação entre componentes
- **Strategy Pattern**: Diferentes renderizadores para diferentes aspectos visuais
- **State Machine**: Controle de estado do jogo com `stated` flag

### Programação Assíncrona

O jogo faz uso inteligente de programação assíncrona:

```javascript
// Exemplo de como captura entrada do usuário
async listenUserInput() {
  return new Promise((resolve) => {
    this.emit("question", "> ");
    this.once("answer", (input) => {
      this.forcaRender.pushUserWord(input);
      resolve();
    });
  });
}
```

## 🎉 Por que este projeto é interessante?

1. **Educativo**: Demonstra conceitos fundamentais de JavaScript e Node.js
2. **Escalável**: Arquitetura permite fácil adição de novos recursos
3. **Limpo**: Código bem estruturado e fácil de entender
4. **Interativo**: Interface de terminal envolvente
5. **Modular**: Componentes independentes e reutilizáveis

## 🚀 Próximos Passos Possíveis

- 🎨 Interface gráfica web
- 🏆 Sistema de pontuação
- 📊 Múltiplos níveis de dificuldade
- 🎵 Efeitos sonoros
- 💾 Persistência de dados
- 🌐 Modo multiplayer

---

_Este projeto demonstra como um jogo simples pode ser uma excelente ferramenta de aprendizado para conceitos avançados de programação!_

## 🎮 Como Jogar

```bash
npm start
# ou
node index.js
```

**Divirta-se salvando o boneco da forca! 🎯**
