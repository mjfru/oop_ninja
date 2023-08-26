class Ninja {
  constructor (name, health) {
  this.name = name;
  this.health = health;
  this.speed = 3;
  this.strength = 3;
  }
  sayName() {
    console.log(this.name)
  }
  showStats() {
    console.log(`${this.name} has ${this.health} health, ${this.speed} speed, and ${this.strength} strength.`)
  }
  drinkSake() {
    this.health += 10;
  }
}

const ninja1 = new Ninja("Hattori Hanzo", 500);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();