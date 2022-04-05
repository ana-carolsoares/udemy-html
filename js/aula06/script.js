var caneta = new Object();
caneta.cor = 'azul';
caneta.preco = 1.6;
caneta.estoque = 200;

caneta.comprar = function(){
    console.log('comprou caneta');
    this.estoque--;
    console.log(this.estoque);

}
console.log(caneta.comprar());

var msg = '';

msg += 'tipo: ' + caneta.cor + '<br>';
msg += 'preço: ' + caneta.preco + '<br>';
msg += ' estoque: ' + caneta.estoque + '<br>';


document.getElementById('output').innerHTML = msg

