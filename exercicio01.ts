// 1- exampleLet - sendo uma variável não constante e de escopo 
// local do tipo numérico com a sua idade como valor.

// 2- exampleConst - sendo uma variável constante e de escopo local do tipo 
// string com o seu nome como valor.

// 3- exampleVar - sendo uma variável não constante e de escopo global
//  do tipo string com a concatenação da seguinte 
//  frase: “Olá meu nome é ”+exampleConst +” e tenho ”+exampleLet+” anos.”;

let exampleLet: number = 39

const exampleConst: string = 'Fabiano'

var exampleVar: string = "Olá meu nome é " + exampleConst + " e tenho " + exampleLet + " anos."

console.log(exampleVar)