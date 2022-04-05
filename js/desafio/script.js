
(function(){
    function imc(){
        var peso = Number(prompt('Qual o peso? '));
        var altura = Number(prompt('Qual a altura? '))

        var imc = peso / (altura**2)
        document.getElementById('output').innerHTML = 'IMC: '+ imc;

        if(imc < 16.9 ){
            document.getElementById('classificacao').innerHTML = ('Muito abaixo do peso!');
    
        }else if(imc <= 18.4){
            document.getElementById('classificacao').innerHTML = ('Abaixo do peso!');

        }else if(imc <= 24.9){
            document.getElementById('classificacao').innerHTML = ('Peso normal');

        }else if(imc <= 29.9){
            document.getElementById('classificacao').innerHTML = ('Acima do peso');

        }else if(imc <= 34.9){
            document.getElementById('classificacao').innerHTML = ('Obesidade grau I');

        }else if(imc <= 40){
            document.getElementById('classificacao').innerHTML = ('Obesidade grau II');

        }else if (imc > 40) {
            document.getElementById('classificacao').innerHTML = ('Obesidade grau III');
        }

    }
    
    imc()

})()