function solucao(sequencia) {
	//seu codigo aqui
    let contagem = 0;
    for (const sequencias of sequencia){
        if (sequencias == ">"){
            if (contagem == 6){
                contagem = 0;
            } else {
               contagem++; 
            }
      } else if (sequencias == "<"){
          if (contagem == 0){
              contagem = 6 ; 
          } else {
              contagem--;
          }
       }
    } 
    console.log (contagem)
} 