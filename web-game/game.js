import { ForcaRender } from "./forca_render.js";
import { PeopleRender } from "./people_render.js";
import { createWebReadline } from "./rl.js";

export class Game {
  stated = false;
  forcaRender = null;
  terminal = null;
  rl = null;

  constructor(terminal) {
    this.terminal = terminal;
    this.rl = createWebReadline(terminal);
  }

  async init() {
    const peopleRender = new PeopleRender();
    this.forcaRender = new ForcaRender({
      secretWord: this.secretWord,
      peopleRender,
      terminal: this.terminal,
    });

    this.clear();

    this.welcome();
    await this.getSecretWord();

    this.clear();

    this.stated = true;

    await this.render();
  }

  welcome() {
    this.terminal.print("🎮 Jogo da Forca 🎮\n", 'success-text');
    this.terminal.print("==============================\n");
  }

  clear() {
    // Web version doesn't need to clear console
    // The terminal emulator handles the display
  }

  async render() {
    while (this.stated) {
      this.terminal.print("\n📝 Bem vindo ao Jogo da Forca!\n", 'warning-text');

      this.terminal.print(this.forcaRender.render() + "\n");

      // Check if player is dead
      if (this.forcaRender.dead) {
        this.clear();
        this.terminal.print("💀 Você perdeu! Você foi enforcado!\n", 'error-text');
        this.terminal.print(`A palavra era: ${this.forcaRender.secretWord.toUpperCase()}\n`, 'warning-text');
        this.stated = false;
        break;
      }

      await this.forcaRender.listenUserInput();

      if (this.forcaRender.solved) {
        this.clear();
        this.terminal.print("🎉 Parabéns! Você ganhou! 🎉\n", 'success-text');
        this.terminal.print(`A palavra era: ${this.forcaRender.secretWord.toUpperCase()}\n`, 'success-text');
        this.stated = false;
      }
    }

    this.terminal.print("\nDigite 'start' para jogar novamente!\n");
    this.terminal.showPrompt();
  }

  async getSecretWord() {
    while (true) {
      const input = await this.rl.question("🔤 Qual a palavra secreta? ");

      if (input.length >= 3) {
        this.forcaRender.secretWord = input;
        break;
      }

      this.clear();

      this.terminal.print("⚠️  A palavra deve ter pelo menos 3 caracteres\n", 'error-text');
    }
  }
}