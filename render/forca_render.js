import { PeopleRender } from "./people_render.js";

export class ForcaRender {
  word = " ";
  userWords = [];
  peopleRender = new PeopleRender();

  constructor({ word, peopleRender } = {}) {
    if (word !== undefined) this.word = word;
    if (peopleRender !== undefined) this.peopleRender = peopleRender;
  }

  pushUserWord(...words) {
    this.userWords.push(words);
  }

  render() {
    return this.templateForca();
  }

  templateForca() {
    return `
     ________
    |        |
    ${this.peopleRender.render()}
    |
    `;
  }

  templateLetters() {
    const wordLetters = this.word.split("");

    return wordLetters;
  }
}
