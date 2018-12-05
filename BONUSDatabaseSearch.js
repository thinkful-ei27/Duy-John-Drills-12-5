'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query){
  let keyquery = Object.keys(query);
  let answer = arr.find(function(item) { 
    for(let key in query){
      if(!(key in item)){
        return false;
      }
      else if (item[key] !== query[key]){
        return false;
      }
    } 
    return true;
  });
  if(answer === undefined){
    return null;
  }
  else {
      return answer;
  }
}

let result;


result = findOne(HEROES, { id: 1 });
//=> { id: 1, name: 'Captain America', squad: 'Avengers' }
console.log(result);


result = findOne(HEROES, { id: 10 });
//=> null
console.log(result);

result = findOne(HEROES, { id: 2, name: 'Aquaman' });
//=> null
console.log(result);

result = findOne(HEROES, { id: 5, squad: 'Justice League' });
//=> { id: 5, name: 'Wonder Woman', squad: 'Justice League' }
console.log(result);

result = findOne(HEROES, { squad: 'Justice League' });
//=> { id: 4, name: 'Superman', squad: 'Justice League' }
console.log(result);