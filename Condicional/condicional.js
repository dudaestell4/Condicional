function media(){

var val1 = document.getElementById("valor1").value;
var val2 = document.getElementById("valor2").value;
var media = (parseInt(val1) + parseInt(val2)) / 2;

if(media >= 6)
if(media == 10)
    alert('O aluno antigiu a media' + media + 'e foi aprovado!');

    else
    alert("Parabéns, foi aprovado! Media "+ media);

    else
    alert("Volta ano que vem! ");

}

function comparar (){
    var val1 = document.getElementById("valor1").value;
    var val2 = document.getElementById("valor2").value;

    if(val1 == val2)
        alert('Os valores são iguais')
    }
    else if(val1 > val2){
        alert("O valor "+ val1 + " é maior que o valor " + val2)
    }
    else{
        alert("O valor " + val2 + " é maior que o valor " + val1);
    }

