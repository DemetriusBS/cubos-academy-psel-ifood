function solucao(tempo, distancia) {
	//seu codigo aqui
    
    total = 0;

  if(tempo < 5){
    console.log(600);
  }else if(tempo >= 5 && tempo <= 60){
    total = tempo * 100 + distancia * 50;
    console.log(total);
  }else if(distancia < 100){
    total = distancia * 200;
    console.log(total);
  }else{
    total = distancia * 150;
    console.log(total);
  }

}
