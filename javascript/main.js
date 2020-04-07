/* @Allysonubius 
Criador dos Scripts. */

function botao() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar !</b>";
    // alert("Obrigado por clicar.");
}

function redirecionar() {
    //nova guia
    window.open("https://globallabs.academy");
    //mesma pagina
    window.location.href = "https://wwww.google.com.br";
}

function trocar() {
    document.getElementById("mousemove").innerHTML = " Site de teste JavaScript."
        //alert("Site de teste básico sobre JavaScript !");
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "&copy; Allyson de Oliveira Brandão - Direitos Reservados."
}

function change(elemento) {
    console.log(elemento.value)
}


/*
function soma(n1, n2) {
    return n1 + n2;
}

/*
function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

/*
function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, novo_nome) {
    frase.replace(nome, novo_nome);
}
alert(soma(5, 10));
alert(serReplace("Vai Japão", "Japão", "Brasil"));
*/

var nome = "Allyson";
var idade = "21 anos";
alert("Olá, meu nome é " + nome + " tenho " + idade + " estou junto com voce neste projeto.");

/*
var d = new Date();

alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for (count = 1; count <= 5; count++) {
    alert(count);
}
*/

/* 
var count = 0;
white (count < 5) {
    console.log(count);
    alert.(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade");

var idade = 18;
if (idade > 18) {
    alert("maior de idade");
};
else {
    aler("menor de idade");
}
*/


/*var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]
console.log(frutas);
alert(frutas[1].nome);*/

/*var fruta = { nome: "maça", cor: "vermelha" }
console.log(fruta.nome);
alert(fruta.cor);*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join("-"));


//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo.";

//alert(n1 +n2);
//console.log(n1);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão","Brasil"));