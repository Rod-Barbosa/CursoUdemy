let varA = 'A';     //B
let varB = 'B';     //C
let varC = 'C';     //A

let buffer = varA;
varA = varB;
varB= varC;
varC = buffer;

console.log(varA, varB, varC);


//também resolve com :
// [varA, varB, varC] = [varB, varC, varA]