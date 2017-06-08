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
            mensagem ="O teu produto tem procedência 'Nordeste' e o valor de R$" + preco;
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