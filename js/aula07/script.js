(function(){
    function calcularMedia(){
       
        var total = 0;
        var qtd = arguments.length;
        var x = 0;

        while(arguments[x]){
            total += arguments[x];
            x++
        }
        return total/qtd;
    }
    var media1 = calcularMedia(2,3);
    var media2 = calcularMedia(2, 3, 10, 6)

    console.log('media1: ', media1);
    console.log('media2 ', media2);


})()
