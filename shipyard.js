// YOUR CODE GOES HERE

let SpaceShip = require('./SpaceShip');
let CrewMember = require('./CrewMember');
let rocket = require('./Rocket').rocket;

let launchPad = (ship, crew, rocket) => {
  console.log('Hello, ready for take-off.');
  console.log(`The ${ship.name} will now take-off.`);
  ourShip.loadCrew(crew);
  console.log(`${ship.selectCaptain()} is the Captain of the ${ship.name}.`);
  ourShip.mountPropulsion(rocket);
  rocket.addFuel(2);
  ourShip.takeOff(rocket);
  ourShip.countDown(10);
};

let ourShip = new SpaceShip('Millenium Falcon');

let crewNames = ['Sam', 'Gabrielle', 'Chewie'];

let trainCrew = (names) => {
  let crewArray = [];
  names.forEach((name) => {
    crewArray.push(new CrewMember(name, true));
  });
  return crewArray;
};

let ourCrew = trainCrew(crewNames);

trainCrew(crewNames);

launchPad(ourShip, ourCrew, rocket);
