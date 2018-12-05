'use strict';

const arrOfObj = [
  {name: 'John', jobTitle: 'Boss'},
  {name: 'Duy', jobTitle: 'Master', boss: 'John'},
  {name: 'Joe', jobTitle: 'Teacher', boss: 'John'}
];

for (let keys in arrOfObj) {
	let names = arrOfObj[keys].name;
    let titles = arrOfObj[keys].jobTitle;
    let bosses = arrOfObj[keys].boss;
    if (bosses === undefined) {
        console.log(`${titles} ${names} doesn't report to anybody.`);
    } else {
        console.log(`${titles} ${names} reports to ${bosses}`);
    }
}