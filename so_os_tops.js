function solucao(produtos) {
	//seu codigo aqui
  let soma = 0;
  let total = 0;
  for(let i = 0; i < produtos.length; i++){
    if(produtos[i].preco >= 10000){
       soma += produtos[i].preco;
    }
    total += produtos[i].preco;
  }

  const result = {
    totalTop: soma,
    percentual: soma / total
  }
  console.log(result);
    
}
