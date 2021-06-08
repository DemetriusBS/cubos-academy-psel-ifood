function solucao(letra, palavras) {
	//seu codigo aqui
  let erros = 0;
  for(let i = 0; i < palavras.length; i++){
     if(palavras[i][0] !== letra){
       erros++;
     }
  }

  console.log(erros);
}
