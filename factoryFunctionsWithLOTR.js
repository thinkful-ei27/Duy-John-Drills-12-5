'use strict';

// {name: 'Gandalf the White', nickname: 'gandalf', race: 'Wizard', origin: 'Middle Earth', attack: 10, defense: 6},
// {name: 'Bilbo Baggins', nickname: 'bilbo', race: 'Hobbit', origin: 'The Shire', attack: 2, defense: 1},
// {name: 'Frodo Baggins', nickname: 'frodo', race: 'Hobbit', origin: 'The Shire', attack: 3, defense: 2},
// {name: 'Aragorn son of Arathorn', nickname: 'aragorn', race: 'Man', origin: 'Dunnedain', attack: 6, defense: 8},
// {name: 'Legolas', nickname: 'legolas', race: 'Elf', origin: 'Woodland Realm', attack: 8, defense: 5}

class createCharacter {
  constructor(name, nickname, race, origin, attack, defense, weapon) {
    this.name = name;
    this.nickname = nickname;
    this.race = race;
    this.origin = origin;
    this.attack = attack;
    this.defense = defense;
    this.weapon = weapon;
  }
    
  describe() {
    return `${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}`;
  }

  evaluateFight(character) {
    let x = this.attack - character.defense;
    let y = character.attack - this.defense;
    if (x < 0) {
      x = 0;
    } else if (y < 0) {
      y = 0;
    }
    console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
  }
}

const characters = [
    new createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'wizard staff'),
    new createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
    new createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'),
    new createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
    new createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow'),
    new createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 3, 1, 'Hadhafang')
];

let aragornFound = characters.find(function(element) {
    return element.nickname === 'aragorn';
})

let gandalfFound = characters.find(function(element) {
    return element.nickname === 'gandalf';
})

let hobbitFilter = characters.filter(element => element.race === 'Hobbit');

let attackAbove5 = characters.filter(element => element.attack > 5);

console.log(gandalfFound.describe());