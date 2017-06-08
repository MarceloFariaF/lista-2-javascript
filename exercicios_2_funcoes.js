function calcula21() {
    var preco = document.getElementById("preco").value;
    var cod = document.getElementById("cod").value;

    switch (cod) {
        case 1:
            mensagem ="O teu produto tem procedência 'Norte' e o valor de R$" + preco;
            break;
        case 2:
            mensagem ="O teu produto tem procedência 'Norte' e o valor de R$" + preco;
            break;
        case 3:
            mensagem ="O teu produto tem procedência 'Leste' e o valor de R$" + preco;
            break;
        case 4:
            mensagem ="O teu produto tem procedência 'Oeste' e o valor de R$" + preco;
            break;
        case 5:
            mensagem ="O teu produto tem procedência 'Nordeste' e o valor de R$" + preco;
            break;
        case 6:
            mensagem ="O teu produto tem procedência 'Nordeste' e o valor de R$" + preco;
            break;
        case 7:
            mensagem ="O teu produto tem procedência 'Sudeste' e o valor de R$" + preco;
            break;
        case 8:
            mensagem ="O teu produto tem procedência 'Sudeste' e o valor de R$" + preco;
            break;
        case 9:
            mensagem ="O teu produto tem procedência 'Sudeste' e o valor de R$" + preco;
            break;
        case 10:
            mensagem ="O teu produto tem procedência 'Centro-Oeste' e o valor de R$" + preco;
            break;
        case 11:
            mensagem ="O teu produto tem procedência 'Centro-Oeste' e o valor de R$" + preco;
            break;
        case 12:
            mensagem ="O teu produto tem procedência 'Centro-Oeste' e o valor de R$" + preco;
            break;
        case 13:
            mensagem ="O teu produto tem procedência 'Centro-Oeste' e o valor de R$" + preco;
            break;
        case 14:
            mensagem ="O teu produto tem procedência 'Centro-Oeste' e o valor de R$" + preco;
            break;
        case 15:
            mensagem ="O teu produto tem procedência 'Centro-Oeste' e o valor de R$" + preco;
            break;
        case 16:
            mensagem ="O teu produto tem procedência 'Centro-Oeste' e o valor de R$" + preco;
            break;
        case 17:
            mensagem ="O teu produto tem procedência 'Centro-Oeste' e o valor de R$" + preco;
            break;
        case 18:
            mensagem ="O teu produto tem procedência 'Centro-Oeste' e o valor de R$" + preco;
            break;
        case 19:
            mensagem ="O teu produto tem procedência 'Centro-Oeste' e o valor de R$" + preco;
            break;
        case 20:
            mensagem ="O teu produto tem procedência 'Centro-Oeste' e o valor de R$" + preco;
            break;
        case 21:
            mensagem ="O teu produto tem procedência 'Nordeste' e o valor de R$" + preco;
            break;
        case 22:
            mensagem ="O teu produto tem procedência 'Nordeste' e o valor de R$" + preco;
            break;
        case 23:
            mensagem ="O teu produto tem procedência 'Nordeste' e o valor de R$" + preco;
            break;
        case 24:
            mensagem ="O teu produto tem procedência 'Nordeste' e o valor de R$" + preco;
            break;
        case 25:
            mensagem ="O teu produto tem procedência 'Nordeste' e o valor de R$" + preco;
            break;
        case 26:
            mensagem ="O teu produto tem procedência 'Nordeste' e o valor de R$" + preco;
            break;
        case 27:
            mensagem ="O teu produto tem procedência 'Nordeste' e o valor de R$" + preco;
            break;
        case 28:
            mensagem ="O teu produto tem procedência 'Nordeste' e o valor de R$" + preco;
            break;
        case 29:
            mensagem ="O teu produto tem procedência 'Nordeste' e o valor de R$" + preco;
            break;
        case 30:
            mensagem =("O teu produto tem procedência 'Nordeste' e o valor de R$" + preco);
            break;
    }


    document.getElementById("mensagem").innerHTML = mensagem;
}

function calcula22() {
    var idade = document.getElementById("idade").value;
    var peso = document.getElementById("peso").value;

    if (idade < 20) {
        if (peso <= 60) {
         mensagem2 = "9";
        }
        else if ((peso > 60) && (peso <= 90)) {
            mensagem2 = "8";
        }
        else {
            mensagem2 = "7";
        }
    }
    else if ((idade >= 20) && (idade <= 50)) {
        if (peso <= 60) {
            mensagem2 = "6";
        }
        else if ((peso > 60) && (peso <=90)) {
            mensagem2 = "5";
        }
        else {
            mensagem2 = "4";
        }
    }
    else {
        if (peso <= 60) {
            mensagem2 = "3";
        }
        else if ((peso > 60) && (peso <=90)) {
            mensagem2 = "2";
        }
        else {
            mensagem2 = "1";
        }
    }
    document.getElementById("mensagem2").innerHTML = mensagem2;
}
function calcula23() {
    var codi = document.getElementById("codi").value;
    var quanti = document.getElementById("quanti").value;
    var ptotal, pdesconto;


    if ((codi >= 1) && (codi <=10)) {
        ptotal = 10 * quanti;
        if (ptotal <= 250) {
            pdesconto = ptotal - (ptotal * 0.05);
            mensagem3 = ("O Valor Unitário do produto comprado é R$10,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 5% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else if ((ptotal > 250) && (ptotal <= 500)) {
            pdesconto = ptotal - (ptotal * 0.1);
            mensagem3 = ("O Valor Unitário do produto comprado é R$10,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 10% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else {
            pdesconto = ptotal - (ptotal * 0.15);
            mensagem3 = ("O Valor Unitário do produto comprado é R$10,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 15% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
    }
    else if ((codi > 10) && (codi <= 20)) {
        ptotal = 15 * quanti;
        if (ptotal <= 250) {
            pdesconto = ptotal - (ptotal * 0.05);
            mensagem3 = ("O Valor Unitário do produto comprado é R$15,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 5% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else if ((ptotal > 250) && (ptotal <= 500)) {
            pdesconto = ptotal - (ptotal * 0.1);
            mensagem3 = ("O Valor Unitário do produto comprado é R$15,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 10% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else {
            pdesconto = ptotal - (ptotal * 0.15);
            mensagem3 = ("O Valor Unitário do produto comprado é R$15,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 15% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
    }
    else if ((codi > 20) && (codi <= 30)) {
        ptotal = 20 * quanti;
        if (ptotal <= 250) {
            pdesconto = ptotal - (ptotal * 0.05);
            mensagem3 = ("O Valor Unitário do produto comprado é R$20,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 5% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else if ((ptotal > 250) && (ptotal <= 500)) {
            pdesconto = ptotal - (ptotal * 0.1);
            mensagem3 = ("O Valor Unitário do produto comprado é R$20,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 10% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else {
            pdesconto = ptotal - (ptotal * 0.15);
            mensagem3 = ("O Valor Unitário do produto comprado é R$20,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 15% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
    }
    else if ((codi > 30) && (codi <= 40)) {
        ptotal = 30 * quanti;
        if (ptotal <= 250) {
            pdesconto = ptotal - (ptotal * 0.05);
            mensagem3 = ("O Valor Unitário do produto comprado é R$30,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 5% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else if ((ptotal > 250) && (ptotal <= 500)) {
            pdesconto = ptotal - (ptotal * 0.1);
            mensagem3 = ("O Valor Unitário do produto comprado é R$30,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 10% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
        else {
            pdesconto = ptotal - (ptotal * 0.15);
            mensagem3 = ("O Valor Unitário do produto comprado é R$30,00 </br>" + "O Preço total da nota é de R$" + ptotal + "</br>" + "Você tera um desconto de 15% </br>" + "O preço com desconto será: R$" + pdesconto);
        }
    }
    else {
        mensagem3 = ("Código Invalido");
    }
    document.getElementById("mensagem3").innerHTML = mensagem3;
}
function calcula25() {
    var htrab = document.getElementById("htrab").value;
    var hfalt = document.getElementById("hfalt").value;
    var h = htrab - (2/3 * (hfalt));
    var min = h * 60;

    if (min > 2400) {
        mensagem4 = ("Seu prêmio será R$500,00");
    }
    else if ((min > 1800) && (min <= 2400)) {
        mensagem4 = ("Seu prêmio será R$400,00");
    }
    else if ((min > 1200) && (min <= 1800)) {
        mensagem4 = ("Seu prêmio será R$300,00");
    }
    else if ((min >600) && (min <= 1200)) {
        mensagem4 = ("Seu prêmio será R$200,00");
    }
    else if (min < 600) {
        mensagem4 = ("Seu prêmio será R$100,00");
    }
    else {
        mensagem4 = ("Dados Invalidos");
    }
    document.getElementById("mensagem4").innerHTML = mensagem4;
}