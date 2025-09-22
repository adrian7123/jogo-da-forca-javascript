export class PeopleRender {
  peopleBase = ["0", "|", "/", "\\", "/", "\\"];

  people = [" ", " ", " ", " ", " ", " "];

  setError() {
    this.people.push(this.peopleBase[this.people.length + 1]);
  }

  render() {
    return this.template();
  }

  get dead() {
    return this.totalErrors === this.people.length;
  }

  get totalErrors() {
    return this.peopleBase.length - 1;
  }

  template() {
    return `|     ${this.people[0]}
    |    ${this.people[1]}${this.people[2]}${this.people[3]}
    |    ${this.people[4]} ${this.people[5]}`;
  }
}
