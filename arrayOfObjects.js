'use strict';

const arrOfObj = [
  {name: 'John', jobTitle: 'Boss'},
  {name: 'Duy', jobTitle: 'Master'},
  {name: 'Joe', jobTitle: 'Teacher'}
];

for (let keys in arrOfObj) {
	let names = arrOfObj[keys].name;
	let titles = arrOfObj[keys].jobTitle;
	console.log(names, titles);
}