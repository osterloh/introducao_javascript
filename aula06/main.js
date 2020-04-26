/**
 * ### TIPOS DE VARIAVEIS ###
 * -string: para textos e caracter
 * -number: para valores numericos
 * -boolean: para TRUE ou FALSE
 * -null: para valores nulos
 * -undefined: para valores nao definidos
 * -symbol: para valores unicos
 */

//### STRING ###
const textSize = "Texto".length; //retorna a qtd de caracteres
console.log(`Quantidade de letras em TEXTO: ${textSize}`);

const splittedeText = "Texto".split("x"); //remove o caracter informado, alterando pelo delimitador
console.log(
  `Array com as posicoes separadas pelo delimitador: ${splittedeText}`
);

const replacedText = "Texto".replace("Text", "txeT"); //altera a string
console.log(`Substituicao de valores: ${replacedText}`);

const lastChar = "Texto".slice(-1); //retorna o ultimo caracter
console.log(`Ultimo caracter da string: ${lastChar}`);

const allWithoutLastChar = "Texto".slice(0, -1); //retorna a string menos o ultimo caracter
console.log(
  `Valor da string do primeiro caracter menos o ultmo: ${allWithoutLastChar}`
);

const secondToEnd = "Texto".slice(1); //retorna a string sem o primeiro carcater
console.log(`Valor da string do segundo caracter ate o ultimo: ${secondToEnd}`);

const twoCharsBeforeFirstPos = "Texto".substr(0, 2); //retorna os dois primeiros caracter
console.log(`Os dois primeiros caracter: ${twoCharsBeforeFirstPos}`);

//### NUMBER ###
const myNumber = 12.4032;

const numberAsString = myNumber.toString(); //converte number para string
console.log(`Numero convertido para String: ${typeof numberAsString}`); //typeof: retorna o tipo

const fixedTwoDecimaL = myNumber.toFixed(2);
console.log(`Valor com duas casas decimais: ${fixedTwoDecimaL}`);

console.log(`Converte string para float: ${parseFloat("13.22")}`); //converte para float

console.log(`Converte string para int: ${parseInt("13.20")}`); //converte para int

//### NULL ###
const nullVariable = null;

console.log(typeof nullVariable); //retorna valor NULL

//### UNDFINED ###
let undefinedVarieable;

console.log(`Tipo da variavel: ${typeof undefinedVarieable}`); //retorna valor nao definido

//### BOOLEAN ###
const isActive = true;
const isAuthenticated = false;

console.log(`Tipo da variavel: ${typeof isActive}`); //retorna um boolean

//### OBJECT ###
let user = {
  name: "Johnatan",
};
console.log("Objeto:", user);
console.log(`Nome: ${user.name}`);

user.name = "Mayara"; //altera o valor de uma propriedade do object
console.log(`Nome alterado: ${user.name}`);

user["name"] = "Anthony"; //altera o valor de uma propriedade do object
console.log(`Nome alterado: ${user.name}`);

const prop = "name";
user[prop] = "Osterloh"; //altera o valor de uma propriedade do object
console.log(`Nome alterado: ${user.name}`);

user.lastName = "Osterloh"; //insere uma nova propriedade ao object
console.log("Objeto:", user);

delete user.name; //remove uma propriedade do object
console.log("Objeto:", user);

const pessoa = {
  name: "Johnatan",
  lastName: "Osterloh",
};
console.log("Objeto: ", pessoa);
console.log("Propriedade do objeto: ", Object.keys(pessoa)); //retorna as propriedades
console.log("Valores das propriedades: ", Object.values(pessoa)); //retorna os valores das propriedades
console.log("Lista de propriedades e valores: ", Object.entries(pessoa)); //retorna as propriedades e valores

Object.assign(pessoa, { fullName: "Johnatan Luiz Osterloh" });
console.log("Pessoa com a propriedade FullName: ", pessoa); //insere uma nova propriedade com valor no objeto

const newObj = { foo: "bar" };
Object.freeze(newObj); //nao permite alterar o objeto
console.log("Outro objeto: ", newObj);

newObj.foo = "changes";
console.log("Tentativa de alteracao: ", newObj);
delete newObj.foo;
console.log("Tentativa de apagar: ", newObj);
newObj.bar = "foo";
console.log("Tentativa de inserir propriedade: ", newObj);

const person = { name: "Johnatan" };
Object.seal(person); //permite alteracao dos valores da propriedades, mas nao as propriedades
console.log("Objeto: ", person);

person.name = "Johnatan Luiz";
console.log("Alteracao de valor da propriedade: ", person);
delete person.name;
console.log("Tetativa de delecao: ", person);
person.age = 29;
console.log("Tentativa de insercao de propriedade: ", person);
