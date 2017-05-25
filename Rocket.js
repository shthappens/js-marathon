let rocket = {
  fuel: 0,

  addFuel(num) {
    if (this.fuel <= 1) {
      this.fuel = (this.fuel + num);
      console.log(`Fuel has been added. The fuel level is ${this.fuel}.`);
    }
  },

  fire() {
    let fired = false;
    if (this.fuel <= 1) {
      console.log(`There is insufficient fuel. The rocket did not fire.`);
    } else {
      (this.fuel -= 1);
      console.log(`The rocket fired. There is ${this.fuel} gallon of fuel remaining.`);
      fired = true;
    }
    return fired;
  }

};

module.exports = { rocket };
