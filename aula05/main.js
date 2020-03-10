/** Ex 01 - declaracao de funcao a ser chamada no evento ONCLICK no html */
// function botao(){
//     alert("Obrigado por clicar!!!");
// }

/** Ex 02 - atribuindo valor em tag html com INNERHTML */
// function botao(){
//     document.getElementById("agradecimento").innerHTML = "<i>Obrigado por clicar!!!</i>";
//     console.log(agradecimento);
// }

/** Ex 03 - funcao com acao em botao para redirecionar para outra pagina na web */
function botao(){
    window.open("https://www.bitly.com/johnatanosterloh");
}

/** Ex 04 - funcao com atribuicao de valor de link para acessar outra pagina na web */
// function botao(){
//     window.location.href = "https://www.bitly.com/johnatanosterloh";
// }

/** Ex 05 - declaracao de funcao para alterar texto ao passar o mouse */
// function trocar(){
//     document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
//     //alert("trocar texto");
// }

// function voltar(){
//     document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!!!";
// }

/** Ex 06 - declaracao de funcao para alterar texto ao passar mouse com declaracao de ELEMENTO e THIS */
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!!!";
}

function load(){
    alert("Página carregada!!!");
}

/** Ex 07 - declaracao de funcao para retorno de valor de option */
function funcaoChange(elemento){
    console.log(elemento.value);
}