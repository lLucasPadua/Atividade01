function solucao(obras) {
	//seu codigo aqui
    let maisValiosa = obras[0];
  for (const item of obras){
    if (item.valor > maisValiosa.valor){
      maisValiosa = item
    }
  }
  console.log (maisValiosa.nome)
}