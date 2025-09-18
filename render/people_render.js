export class PeopleRender {
  peopleBase = {
    head: "0",
    body: "|",
    leftArm: "/",
    rightArm: "\\",
    leftLeg: "/",
    rightLeg: "\\",
  };

  people = {};

  setError() {
    this.people.push(this.peopleBase[this.people.length + 1]);
  }

  render() {
    return this.template();
  }

  get dead() {
    return false;
  }

  template() {
    return `|     ${this.people.head}
    |    ${this.people.leftArm}${this.people.body}${this.people.rightArm}
    |    ${this.people.leftLeg} ${this.people.rightLeg}`;
  }
}
