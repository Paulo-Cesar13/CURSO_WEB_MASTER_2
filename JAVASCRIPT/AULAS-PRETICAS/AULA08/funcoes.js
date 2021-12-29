window.onload = function() {

    function teste() {

        var luta;

        for(luta = 0; luta < 10; luta++){

            if(luta == 10){
                luta+2
            } else if(luta == 100) {
                alert('Você conseguiu atingir seu objetivo!!');
            }
        }

        teste();

    }

    
    /*
    function somarValores(valor1, valor2) {

        var resultado = valor1 + valor2;

        if(resultado > 10) {
            alert('Você conseguiu a nota maxima!!');
        }else if(resultado < 10 && resultado > 5) {
            alert('Você não conseguiu a nota maxima, continui tentando!!');
        } else {
            alert('Você infelizmente foi desclacificado!!');
        }
    }

    somarValores(1, 5);

    */
}