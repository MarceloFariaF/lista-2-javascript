function calcula2() {
    //Recupera dados do usuario
    var nro1 = parseFloat(document.getElementById("nro1").value);
    var nro2 = parseFloat(document.getElementById("nro2").value);
    //Processamento
    var media;
    media = (nro1 + nro2) /2;

    if ((media >= 0) && (media < 3)){
        mensagem = "Reprovado";
    }
    else if ((media >= 3) && (media < 7 )){
        mensagem = "Exame";
    }
    else if ((media >= 7) && (media <= 10 )){
        mensagem = "Aprovado";
    }
    else {
        mensagem = "Média Inválida";
    }
    //mostra resultado ao usuário
    document.getElementById("mensagem").innerHTML  = mensagem;
}
function calcula9() {
    var saldo = document.getElementById("saldo").value;
    var smedio
    if (saldo > 400) {
        smedio = (saldo * 1.3);
        mensagem = smedio;
    }
    else if ((saldo > 300) && (saldo <= 400)) {
        smedio = (saldo * 1.25);
        mensagem = smedio;
    }
    else if ((saldo > 200) && (saldo <=300)) {
        smedio = (saldo * 1.2);
        mensagem = smedio;
    }
    else if (saldo <= 200) {
        smedio = (saldo * 1.1);
        mensagem = smedio;

    }
    document.getElementById("mensagem").innerHTML = mensagem
}
function calcula10() {
    var custo = document.getElementById("custo").value;
    var distribuidor
    var imposto
    var total
    var arredondado

    if (custo <= 12000) {
        var distribuidor = (custo * 1.05);
        arredondado = parseFloat(distribuidor.toFixed(2))
        mensagem = arredondado;
    }
    else if ((custo > 12000) && (custo <= 25000)) {
        var distribuidor = (custo * 1.1);
        var imposto = (distribuidor * 1.15);
        arredondado = parseFloat(imposto.toFixed(2))
        mensagem = arredondado;

    }
    else if (custo > 25000) {
        var distribuidor = (custo * 1.15);
        var imposto = (distribuidor * 20);
        arredondado = parseFloat(imposto.toFixed(2))
        mensagem = arredondado;
    }
    document.getElementById("mensagem").innerHTML = mensagem
}
function calcula11() {
    var salario = document.getElementById("salario").value;
    var aumento
    var arredondado

    if (salario <= 350) {
        aumento = (salario * 1.15);
        arredondado = parseFloat(aumento.toFixed(2))
        mensagem = arredondado;
    }
    else if ((salario > 300) && (salario <= 600)) {
        aumento = (salario *1.1);
        arredondado = parseFloat(aumento.toFixed(2))
        mensagem = arredondado;
    }
    else if ((salario > 600) && (salario <= 900)) {
        aumento = (salario *1.05);
        arredondado = parseFloat(aumento.toFixed(2))
        mensagem = arredondado;
    }
    else if (salario > 900) {
        aumento = (salario * 1);
        arredondado = parseFloat(aumento.toFixed(2))
        mensagem = arredondado;
    }
    document.getElementById("mensagem").innerHTML = mensagem;
}
function calcula12(){
    var salario1 = document.getElementById("salario1").value;
    var grat
    var imposto
    var arredondado

    if (salario1 <= 350) {
        grat = (salario1 + 100);
        imposto = grat - (grat * 0.07);
        arredondado = parseFloat(imposto.toFixed(2));
        mensagem = arredondado;
    }
    else if ((salario1 > 350) && (salario1 <= 600)) {
        grat = (salario1 + 75);
        imposto = grat - (grat * 0.07);
        arredondado = parseFloat(imposto.toFixed(2));
        mensagem = arredondado;
    }
    else if ((salario1 > 600) && (salario1 <= 900)) {
        grat = (salario1 + 50);
        imposto = grat - (grat * 0.07);
        arredondado = parseFloat(imposto.toFixed(2));
        mensagem = arredondado;
    }
    else if (salario1 > 900) {
        grat = (salario1 + 35);
        imposto = (grat * 0.07);
        arredondado = parseFloat(imposto.toFixed(2));
        mensagem = arredondado;
    }
    document.getElementById("mensagem").innerHTML = mensagem;
}
function calcula13(){
    var preco = document.getElementById("preco").value;
    var preco2
    var p


    if (preco <= 50) {
        preco2 = (preco * 1.05);
    }
    else if ((preco > 50) && (preco <= 100)) {
            preco2 = (preco * 1.1)
    }
    else if (preco > 100) {
        preco2 = (preco * 1.15)
    }

    if (preco2 <= 80) {
        mensagem = "Barato"
    }
    else if ((preco2 > 80) && (preco2 <= 120)) {
        mensagem = "Normal"
    }
    else if ((preco2 > 120) && (preco2 <= 200)) {
        mensagem = "Caro"
    }
    else if (preco2 > 200) {
        mensagem = "Muito Caro"
    }
    document.getElementById("mensagem").innerHTML = mensagem
}
function calcula14(){
    var salario = document.getElementById("salario").value;
    var sal2

    if (salario < 300) {
        sal2 = (salario * 1.5);
        mensagem = sal2
    }
    else if ((salario >= 300) && (salario < 500)) {
        sal2 = (salario * 1.4)
        mensagem = sal2
    }
    else if ((salario >= 500) && (salario < 700)) {
        sal2 = (salario * 1.3)
        mensagem = sal2
    }
    else if ((salario >= 700) && (salario < 800)) {
        sal2 = (salario * 1.2)
        mensagem = sal2
    }
    else if ((salario >= 800) && (salario < 1000)) {
        sal2 = (salario * 1.1)
        mensagem = sal2
    }
    else if (salario >1000) {
        sal2 = (salario * 1.05)
        mensagem = sal2
    }
    document.getElementById("mensagem").innerHTML = "R$" + mensagem
}
function calcula15() {
    var valor = document.getElementById("valor").value;
    var esc = document.getElementsByName("esc").value;
    var renda

    if (esc = "invest") {
        renda = (renda * 0.03);
        arredondado = parseFloat(renda.toFixed(2));
        mensagem = arredondado
    }
    else if (esc = "invest2") {
        renda = (renda * 0.04);
        arredondado = parseFloat(renda.toFixed(2));
        mensagem = arredondado
    }
    document.getElementById("mensagem").innerHTML = mensagem
}
