import { ForcaRender } from "../render/forca_render.js";
import { PeopleRender } from "../render/people_render.js";
import { askQuestion } from "../utils/rl.js";

export class Game {
  stated = false;
  forcaRender = new ForcaRender();

  async init() {
    const peopleRender = new PeopleRender();
    this.forcaRender = new ForcaRender({
      secretWord: this.secretWord,
      peopleRender,
    });

    console.clear();

    this.welcome();
    await this.getSecretWord();

    console.clear();

    this.stated = true;

    await this.render();
  }

  welcome() {
    console.log("Jogo da Forca");
  }

  async render() {
    while (this.stated) {
      console.log("Bem vindo ao Jogo da Forca");

      console.log(this.forcaRender.render());

      await this.forcaRender.listenUserInput();

      if (this.forcaRender.solved) {
        console.clear();
        console.log("Parabéns! Você ganhou!");
        console.log(`A palavra era: ${this.forcaRender.secretWord}`);
        this.stated = false;
      }
    }
  }

  async getSecretWord() {
    while (true) {
      const input = await askQuestion("Qual a palavra secreta? ");

      if (input.length >= 3) {
        this.forcaRender.secretWord = input;
        break;
      }

      console.clear();

      console.log("!! A palavra deve ter pelo menos 3 caracteres");
    }
  }
}
