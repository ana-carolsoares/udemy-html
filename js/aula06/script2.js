var produtos = [
    {'nome': 'caneta', 'preço': 2},
    {'nome': 'lapis', 'preço': 1.2},
    {'nome': 'borracha', 'preço': 0.5}
];

var msg = '';

for(var i = 0; i < produtos.length; i++){
    console.log(produtos[i]);
    msg += '<h2>Produto: ' + produtos[i].nome + '<br></h2>';
    msg += '<p>Preço: ' + produtos[i].preço + '<br></p>';
}

document.getElementById('output').innerHTML = msg