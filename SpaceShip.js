let rocket = require('./Rocket').rocket;

class SpaceShip {
  constructor(name) {
    this.name = name;
    this.crew = [];
    this.propulsion = null;
    this.status = false;
  }

  loadCrew(crewMembers) {
    crewMembers.forEach((member) => {
      this.crew.push(member);
      console.log(`${member.name} has boarded the ${this.name}.`);
    });
  }

  selectCaptain() {
    return this.crew[Math.floor(Math.random() * this.crew.length)].name;
  }

  mountPropulsion(object) {
    this.propulsion = object;
    console.log(`Propulsion unit has been mounted.`);
  }

  takeOff() {
    if (rocket.fire()) {
      this.status = true;
      console.log('Commence Countdown');
    } else {
      console.log('Take-off unsuccessful. Please try again.');
    }
  }

  countDown(time, callBack) {
    if (this.status === true && time === 0) {
      console.log(`Blasssssst-Ooofffff`);
    } else if (this.status === true) {
      console.log(time);
      setTimeout(() => {
        return this.countDown(time -1, callBack);
      }, 1000);
    }
  }

}

module.exports = SpaceShip;
