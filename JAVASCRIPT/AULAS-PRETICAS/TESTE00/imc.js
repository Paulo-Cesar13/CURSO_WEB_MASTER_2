function imc(alt, peso) {

    var resultado = peso / alt**2;

    alert('Seu peso é: '+peso);
    alert('Sua altura é: '+alt);



    if(resultado < 18.5) {
        alert('Você esta abaixo do peso ideal!!');
    } else if(resultado < 24.9) {
        alert('Você esta no seu peso ideal!!');
    } else {
        alert('Você esta com sobre peso!!');
    }
}

imc(1.80, 90);