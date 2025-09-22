class TerminalEmulator {
  constructor() {
    this.output = document.getElementById("terminal-output");
    this.input = document.getElementById("terminal-input");
    this.currentInput = "";
    this.inputCallback = null;
    this.isWaitingForInput = false;

    this.setupEventListeners();
    this.print("Terminal iniciado...\n");
    this.print('Digite "start" para iniciar o jogo da forca\n');
    this.showPrompt();
  }

  setupEventListeners() {
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.handleInput();
      }
    });

    // Keep focus on input
    document.addEventListener("click", () => {
      this.input.focus();
    });
  }

  handleInput() {
    const inputValue = this.input.value.trim();

    // Echo the input
    this.print(`$ ${inputValue}\n`, "input-echo");

    if (this.isWaitingForInput && this.inputCallback) {
      this.inputCallback(inputValue);
    } else {
      this.processCommand(inputValue);
    }

    this.input.value = "";
    this.scrollToBottom();
  }

  processCommand(command) {
    switch (command.toLowerCase()) {
      case "start":
        this.startGame();
        break;
      case "clear":
        this.clear();
        break;
      case "help":
        this.showHelp();
        break;
      default:
        this.print(`Comando não reconhecido: ${command}\n`, "error-text");
        this.print('Digite "help" para ver os comandos disponíveis\n');
        this.showPrompt();
    }
  }

  async startGame() {}

  showHelp() {
    this.print("Comandos disponíveis:\n", "warning-text");
    this.print("  start  - Iniciar o jogo da forca\n");
    this.print("  clear  - Limpar a tela\n");
    this.print("  help   - Mostrar esta ajuda\n");
    this.showPrompt();
  }

  print(text, className = "output-text") {
    const line = document.createElement("div");
    line.className = `output-line ${className}`;
    line.textContent = text;
    this.output.appendChild(line);
    this.scrollToBottom();
  }

  clear() {
    this.output.innerHTML = "";
    this.showPrompt();
  }

  showPrompt() {
    this.isWaitingForInput = false;
    this.inputCallback = null;
  }

  async askQuestion(question) {
    return new Promise((resolve) => {
      this.print(question, "output-text");
      this.isWaitingForInput = true;
      this.inputCallback = resolve;
    });
  }

  scrollToBottom() {
    this.output.scrollTop = this.output.scrollHeight;
  }
}

// Initialize terminal when page loads
document.addEventListener("DOMContentLoaded", () => {
  window.terminal = new TerminalEmulator();
});
