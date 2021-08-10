function solucao(obj) {
	//seu codigo aqui
    if (obj.jaTomouVacina){
        console.log("JA TOMOU VACINA")
    } else if (obj.idade < 60 && obj.temComorbidade === false && obj.jaTomouVacina === false){
        console.log ("INAPTA")
    } else if (obj.idade >= 60){
        console.log ("APTA POR IDADE")
    } else if (obj.temComorbidade){
        console.log ("APTA POR COMORBIDADE")
    }

}