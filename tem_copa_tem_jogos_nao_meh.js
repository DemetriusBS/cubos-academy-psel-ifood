function solucao(ano) {
	//seu codigo aqui
  const proximaCopa = 2022;
  let resultado = 0;
  
  if(ano % 2 != 0){
    console.log("MEH");
  }else if(ano % 2 == 0){
    resultado = ano - proximaCopa;
   if(resultado % 4 == 0){
     console.log("COPA");
   }else{
     console.log("JOGOS");
   }
  }
}