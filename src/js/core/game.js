import { EventEmitter } from "node:events";
import { ForcaRender } from "../render/forca_render.js";
import { PeopleRender } from "../render/people_render.js";

export class Game extends EventEmitter {
  running = false;
  forcaRender = new ForcaRender();

  async init() {
    const peopleRender = new PeopleRender();
    this.forcaRender = new ForcaRender({
      secretWord: this.secretWord,
      peopleRender,
    });

    this.clear();

    this.welcome();
    await this.getSecretWord();

    this.clear();

    this.running = true;

    await this.render();
  }

  welcome() {
    this.emit("body", "Bem vindo ao Jogo da Forca\n");
  }

  clear() {
    this.emit("clear");
  }

  async render() {
    while (this.running) {
      this.welcome();

      this.emit("body", this.forcaRender.render());

      const input = await this.askUserInput();

      this.forcaRender.pushUserWord(input);

      this.clear();

      if (this.forcaRender.solved) {
        this.clear();
        this.emit("body", "Parabéns! Você ganhou!");
        this.emit("body", `A palavra era: ${this.forcaRender.secretWord}`);
        this.running = false;
      }
    }
  }

  async askUserInput() {
    return new Promise((resolve) => {
      this.emit("question", "> ");

      this.once("answer", (input) => {
        console.log("answer");

        resolve(input);
      });
    });
  }

  askSecretWord() {
    return new Promise((resolve) => {
      this.emit("secretWord", "Qual a palavra secreta? ");

      this.once("secretWord", (input) => {
        resolve(input);
      });
    });
  }

  async getSecretWord() {
    while (true) {
      const input = await this.askSecretWord();

      if (input.length >= 3) {
        this.forcaRender.setSecretWord(input);
        break;
      }

      this.clear();

      this.emit("body", "!! A palavra deve ter pelo menos 3 caracteres");
    }
  }
}
