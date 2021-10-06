//String são indexadas
//               01234567
let umaString = "Um texto";

console.log(umaString);
console.log(umaString[4]);
console.log(umaString[8]);
console.log(umaString[-1]);
console.log(umaString.charAt(6));
console.log(umaString.concat(' em um lindo', ' ', 'dia'));
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf(`Texto`));
console.log(umaString.lastIndexOf(`o`));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/g));
console.log(umaString.replace(`Um`, `Outra`));
console.log(umaString.replace(/Um/, `Outra de novo`));
console.log(umaString.length);

let umaOutraString = `o rato roeu a roupa do rei de roma.`;
console.log(umaOutraString.slice(2, 6));
console.log(umaOutraString.slice(-5));
console.log(umaOutraString.slice(-5, umaOutraString.length -1));
console.log(umaOutraString.slice(-5,-1));

console.log(umaOutraString.split(' '));
console.log(umaOutraString.split(`r`));
console.log(umaOutraString.split(` `, 3));

















