var numero = 0

function somar(valor){
    console.log(valor + 10)
}

somar(numero)

function areaDoRetangulo(largura, comprimento){
    var area = largura * comprimento
    console.log(area + "m")
}

areaDoRetangulo(10, 7)

function areaDoQuadrado(largura){
    var area = largura **2
    return area
}


var area2 = areaDoQuadrado(10)

console.log(area2)

function areaDopi(largura, comprimento){
    var area = largura + comprimento
    return area
}

var area3 = areaDopi(3, 0.14)

console.log(area3)

function mensagem(){
    alert("voce clicou no oi")
}

function mudartexto(){
    document.getElementById("text").innerHTML = "voce clicou no button"
}

function imagem(){
    alert("não meixa na imagem")
}