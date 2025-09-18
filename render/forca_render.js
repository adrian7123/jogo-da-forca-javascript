import { askQuestion } from "../utils/rl.js";
import { PeopleRender } from "./people_render.js";

export class ForcaRender {
  secretWord = "";
  userWords = [];
  peopleRender = new PeopleRender();

  constructor({ secretWord, peopleRender } = {}) {
    if (secretWord !== undefined) this.secretWord = secretWord;
    if (peopleRender !== undefined) this.peopleRender = peopleRender;
  }

  render() {
    return this.templateForca();
  }

  async listenUserInput() {
    const input = await askQuestion("> ");

    this.userWords.push(...input.split(""));

    return;
  }

  templateForca() {
    return `
    letras usadas: ${this.userWords.join(", ")}
     _____
    |     |
    ${this.peopleRender.render()}
    ${this.templateLetters()}
    `;
  }

  setSecretWord(word) {
    this.secretWord = word;
  }

  pushUserWord(...words) {
    for (const w in words) {
      if (!this.userWords.includes(w)) {
        this.userWords.push(w);
      }
    }
  }

  get solved() {
    const wordLetters = this.secretWord.split("");
    for (const wl of wordLetters) {
      if (!this.userWords.includes(wl)) {
        return false;
      }
    }

    return true;
  }

  get dead() {
    return this.peopleRender.dead;
  }

  templateHideLetters() {
    const wordLetters = this.secretWord.split("");

    return wordLetters
      .map((w) => (this.userWords.includes(w) ? w : "_"))
      .join(" ");
  }

  templateLetters() {
    return `| ${this.templateHideLetters()}`;
  }
}
