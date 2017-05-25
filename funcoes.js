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

    if (salario <= 350) {
        aumento = (salario * 1.15);
        mensagem = aumento;
    }
    else if ((salario > 300) && (salario <= 600)) {
        aumento = (salario *1.1);
        mensagem = aumento;
    }
    else if ((salario > 600) && (salario <= 900)) {
        aumento = (salario *1.05);
        mensagem = aumento;
    }
    else if (salario > 900) {
        aumento = (salario * 1);
        mensagem = aumento;
    }
    document.getElementById("mensagem").innerHTML = mensagem
}

