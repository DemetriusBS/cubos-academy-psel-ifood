function solucao(precos) {
    //seu codigo aqui
    
  let total = 0;
  let menorValorAtual = precos[0];
  if(precos.length >= 5){
    for(let i = 0; i < precos.length; i++){
      if(precos[i] < menorValorAtual){
        menorValorAtual = precos[i];
      }
    }
    for(let i  = 0; i < precos.length; i++){
      total += precos[i];
    }
    console.log(total - menorValorAtual);
  }else{
    for(let i  = 0; i < precos.length; i++){
       total += precos[i];
    }
    console.log(total);
  }
    
}