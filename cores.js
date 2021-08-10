function solucao(cor1, cor2) {
	//seu codigo aqui
    if (cor1 == "azul" && cor2 == "amarelo"){
        console.log ("verde")
    } else if (cor1 == "azul" && cor2 == "vermelho"){
        console.log ("roxo")
    } else if (cor1 == "amarelo" && cor2 == "azul"){
        console.log ("verde")
    } else if ( cor1 == "amarelo" && cor2 == "vermelho"){
        console.log ("laranja")
    } else if (cor1 == "vermelho" && cor2 == "azul"){
        console.log ("roxo")
    } else if (cor1 == "vermelho" && cor2 == "amarelo"){
        console.log ("laranja")
    } else {
        console.log (cor1)
    }

}