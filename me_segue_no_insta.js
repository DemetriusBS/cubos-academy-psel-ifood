function solucao(largura, altura) {
    //seu codigo aqui
      
      if(altura > largura){
          console.log("RETRATO");
      } else if(largura > altura){
          console.log("PAISAGEM");
      }else{
          console.log("QUADRADA");
      }   
    
  }