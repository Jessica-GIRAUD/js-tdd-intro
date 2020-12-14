function capitalizeFirstLetter(input) {
  const splitStr = input.split(' '); 
  //met chaque élément de l'input dans un tableau
  for (let i= 0; i < splitStr.length; i++){ 
    // pour chaque élément
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1); 
    //pour chaque mot splitStr[i], on passe (0) en majuscule puis on renvoie le reste du mot à partir de (1)   
  }
  return splitStr.join(' ');  // regroupe chaque élément du tableau et les met un espace entre chaque
}

module.exports = capitalizeFirstLetter;