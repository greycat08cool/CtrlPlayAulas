function CriarJogador(nome, inventario){
    return{
        nome: nome,
        inventario: inventario,
        
    }
}

var jogador1 = CriarJogador("noob", ["darkharth", "dominus infernus", "poção sletkin"])
var jogador2 = CriarJogador("bacon", ["firebrand", "ninja mask", "rock armor"])
var jogador3 = CriarJogador("dummie", ["rock sword", "manto rochoso", "shuriken"])

var jogadores = []
jogadores.push(jogador1)
jogadores.push(jogador2)
jogadores.push(jogador3)

function MostrarInventarios(){
    jogadores.forEach(jogador => {
        console.log("nome = " + jogador.nome)
        console.log("inventario = " + jogador.inventario)
        console.log("____________________________________________________")

    })
}

function TrocaDeItem(JogadorEnviar, JogadorReceber, Item){
    const JogadorEnviarTemp = jogadores.find(jogador => jogador.nome === JogadorEnviar)
    const JogadorReceberTemp = jogadores.find(jogador => jogador.nome === JogadorReceber)

    if(!JogadorEnviarTemp  || !JogadorReceberTemp){
        console.log("jogador não encontrado!")
        return
    }

    const indexItem =JogadorEnviarTemp.inventario.indexOf(Item)

    if(indexItem === -1){
        console.log("item não encontrado!")
        return
    }
    JogadorEnviarTemp.inventario.splice(indexItem, 1)
    JogadorReceberTemp.inventario.push(Item)

    console.log(JogadorEnviar + " enviou o item " + Item + " para o " + JogadorReceber)
}

MostrarInventarios()
TrocaDeItem("bacon", "noob", "firebrand")
MostrarInventarios()