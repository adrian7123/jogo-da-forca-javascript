import { createWebReadline } from "./rl.js";
import { PeopleRender } from "./people_render.js";

export class ForcaRender {
  secretWord = "";
  userWords = [];
  peopleRender = new PeopleRender();
  terminal = null;
  rl = null;

  constructor({ secretWord, peopleRender, terminal } = {}) {
    if (secretWord !== undefined) this.secretWord = secretWord;
    if (peopleRender !== undefined) this.peopleRender = peopleRender;
    if (terminal !== undefined) {
      this.terminal = terminal;
      this.rl = createWebReadline(terminal);
    }
  }

  render() {
    return this.templateForca();
  }

  async listenUserInput() {
    const input = await this.rl.question("> ");

    // Check if the input is a full word guess
    if (input.length > 1) {
      if (input.toLowerCase() === this.secretWord.toLowerCase()) {
        // Correct word guess - add all letters
        this.userWords.push(...this.secretWord.toLowerCase().split(""));
      } else {
        // Wrong word guess - add error
        this.peopleRender.setError();
        this.terminal.print(`"${input}" não é a palavra correta!\n`, 'error-text');
      }
    } else {
      // Single letter guess
      const letter = input.toLowerCase();
      if (!this.userWords.includes(letter)) {
        this.userWords.push(letter);
        
        // Check if letter is in the word
        if (!this.secretWord.toLowerCase().includes(letter)) {
          this.peopleRender.setError();
          this.terminal.print(`A letra "${letter}" não está na palavra!\n`, 'error-text');
        } else {
          this.terminal.print(`Boa! A letra "${letter}" está na palavra!\n`, 'success-text');
        }
      } else {
        this.terminal.print(`Você já tentou a letra "${letter}"!\n`, 'warning-text');
      }
    }

    return;
  }

  templateForca() {
    return `
    Letras usadas: ${this.userWords.join(", ")}
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
    for (const w of words) {
      if (!this.userWords.includes(w)) {
        this.userWords.push(w);
      }
    }
  }

  get solved() {
    const wordLetters = this.secretWord.toLowerCase().split("");
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
    const wordLetters = this.secretWord.toLowerCase().split("");

    return wordLetters
      .map((w) => (this.userWords.includes(w) ? w.toUpperCase() : "_"))
      .join(" ");
  }

  templateLetters() {
    return `| ${this.templateHideLetters()}`;
  }
}