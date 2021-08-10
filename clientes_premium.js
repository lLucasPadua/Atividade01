function solucao(precos) {
    //seu codigo aqui
    let somaTotal = 0;
    let valorPremium = 0;
    
    for(const preco of precos){
        somaTotal += preco;
        
        if (preco > 200){
        valorPremium = preco
       
        }
    } 
        if (somaTotal > 1000 && valorPremium > 200){
            console.log ("PREMIUM")
            } else if (somaTotal > 1000 && valorPremium <= 200){
                console.log ("VIP")
            } 
             else {
            console.log ("NORMAL")
        }
  }