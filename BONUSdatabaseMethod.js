'use strict';

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(query) {
    let arr = this.store.heroes;
    let answer = arr.find(item => {
      for (let key in query) {
        if (!(key in item)) {
          return false;
        } else if (item[key] !== query[key]) {
          return false;
        }
      }
      return true;
    });
    return (answer === undefined) ? null : answer;
  }
};

let result;

result = Database.findOne({ id: 2 });

console.log(result);