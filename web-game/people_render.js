export class PeopleRender {
  peopleBase = {
    head: "O",
    body: "|",
    leftArm: "/",
    rightArm: "\\",
    leftLeg: "/",
    rightLeg: "\\",
  };

  people = {};
  errorCount = 0;

  setError() {
    this.errorCount++;
    
    switch (this.errorCount) {
      case 1:
        this.people.head = this.peopleBase.head;
        break;
      case 2:
        this.people.body = this.peopleBase.body;
        break;
      case 3:
        this.people.leftArm = this.peopleBase.leftArm;
        break;
      case 4:
        this.people.rightArm = this.peopleBase.rightArm;
        break;
      case 5:
        this.people.leftLeg = this.peopleBase.leftLeg;
        break;
      case 6:
        this.people.rightLeg = this.peopleBase.rightLeg;
        break;
    }
  }

  render() {
    return this.template();
  }

  get dead() {
    return this.errorCount >= 6;
  }

  template() {
    const head = this.people.head || " ";
    const body = this.people.body || " ";
    const leftArm = this.people.leftArm || " ";
    const rightArm = this.people.rightArm || " ";
    const leftLeg = this.people.leftLeg || " ";
    const rightLeg = this.people.rightLeg || " ";

    return `|     ${head}
    |    ${leftArm}${body}${rightArm}
    |    ${leftLeg} ${rightLeg}`;
  }
}