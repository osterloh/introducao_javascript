/** Ex 01 - declaracao de funcoes no js com ex de soma de 2 valores */
// function soma(n1, n2){
//     return n1 + n2;
// }

// alert(soma(5, 10));

/** Ex 02 - declaracao de funcao para alterar valor de frase com REPLACE */
// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);
// }

// alert(setReplace("Vai Japão", "Japão", "Brasil"));

/** Ex 03 - declaracoa de funcao com ex de declaracao de variaveis e estrutura condicional */
function validaIdade(idade){
    var validar;

    if(idade >= 18){
        validar = true;

    } else{
        validar = false;

    }

    return validar;
}

var idade = prompt("Informe sua idade: ");
console.log(validaIdade(idade));