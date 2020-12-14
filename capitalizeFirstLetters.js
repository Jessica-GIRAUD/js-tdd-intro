function capitalizeFirstLetter(input) {
  const splitStr = input.split(' '); 
  //met chaque élément de l'input dans un tableau avec '' pour chacun
  for (let i= 0; i < splitStr.length; i++){ 
    // pour chaque élément
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1); 
    //pour chaque mot splitStr[i], on passe (0) en majuscule puis on renvoie le reste du mot à partir de (1)   
  }
  return splitStr.join(' ');  // regroupe chaque élément du tableau et les met un espace entre chaque
}

const assert = require('assert');

assert.strictEqual(typeof capitalizeFirstLetter, 'function');
assert.strictEqual(capitalizeFirstLetter.length, 1);
assert.strictEqual(capitalizeFirstLetter('i am learning TDD'), 'I Am Learning TDD');
assert.strictEqual(capitalizeFirstLetter('zorro'), 'Zorro');
assert.strictEqual(capitalizeFirstLetter('z'), 'Z');
assert.strictEqual(capitalizeFirstLetter(''), '');