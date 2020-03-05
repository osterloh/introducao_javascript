/** Ex: 01 - Declaracao de variaveis do tipo de data */
// var data = new Date();
// alert(data);

/** Ex: 02 - Declaracao de variaveis do tipo de data com retorno de dados especificos */
var data = new Date();
alert(
    " Dia :" + data.getDay() +          //retorna o dia
    " Mes: " + (data.getMonth() + 1) +  //retorna o mes
    " Ano: " + data.getFullYear() +     //retorna o ano
    " - Hora: " + data.getHours() +     //retorna a hora
    " Min: " + data.getMinutes()        //retorna os minutos
);