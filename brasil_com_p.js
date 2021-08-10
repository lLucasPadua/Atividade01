function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui
    let resultado = [];
    for (const palavra of palavras){
        if(primeiraLetra == palavra[0] && segundaLetra == palavra[1])
        resultado.push(palavra)
    }
    if (resultado.length > 0){
        for (const palavra of resultado){
            console.log (palavra)
        } 
    } else {
        console.log('NENHUMA')
    }

}