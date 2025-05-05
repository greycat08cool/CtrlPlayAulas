const carro = {
    marca: "Ford",
    tamanho: 10,
    quaantidadeDePorta: 2,
    VelocidadeMaxima: 200,
    gasolina: 150,
    Ligar: function(){
        console.log("você ligou o carro!")},
        Desligar: function(){
            console.log("você desligou o carro!")},
            Acelerar: function(){
                this.gasolina = this.gasolina - 1
    }

}

carro.Ligar()
carro.Desligar()
console.log(carro.gasolina)
carro.Acelerar()
console.log(carro.gasolina)

console.log(carro.marca)

carro.marca = "ferrari"

console.log(carro.marca)

const  firebrand = {
    cor: "vermelha",
    efeito: "chama",
    tamanho: 1,
    VelocidadeDeAtaque: 2
}

console.log(firebrand.efeito)
console.log(firebrand.cor)

//caso entrar em contato com a agua.
firebrand.efeito = "nem um"
firebrand.cor = "cinza"

console.log(firebrand.efeito)
console.log(firebrand.cor)

function CriarCarro(marca, tamanho, gasolina){
    return{
        marca: marca,
        tamanho: tamanho,
        gasolina: gasolina,
    }
}

var carro1 = CriarCarro("ford",20, 210)
    var carro2 = CriarCarro("ferrari", 10, 300)
    
    console.log(carro1)
    console.log(carro2)