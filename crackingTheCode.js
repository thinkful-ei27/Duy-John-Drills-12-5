'use strict';

const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
}

const message = 'craft block argon meter bells brown croon droop';

function decode(word) {
    if (word[0] === 'a') return word[cipher.a-1];
    if (word[0] === 'b') return word[cipher.b-1];
    if (word[0] === 'c') return word[cipher.c-1];
    if (word[0] === 'd') return word[cipher.d-1];
    return ' ';
}

console.log(decode('diabolical'));

function decodeWords(string) {
    let strArray = string.split(' ');
    let message = '';
    for (let strings in strArray) {
        message = message.concat(decode(strArray[strings]));
    }
    return message;
}

console.log(decodeWords(message));