const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave(){
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = processaTexto(texto);
    
    campoResultado.textContent = palavras.join(", ");
}

function processaTexto(texto) {
    let palavraS = texto.split(" ");
    return palavras;
}