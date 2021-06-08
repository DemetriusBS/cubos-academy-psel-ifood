function solucao(joao, andre) {
    // Escreva seu codigo aqui
  if (joao === "PEDRA" && andre === "TESOURA"
    || joao === "PAPEL" && andre === "PEDRA"
    || joao === "TESOURA" && andre === "PAPEL") {
    console.log("JOAO");
  } else if (andre === "PEDRA" && joao === "TESOURA"
    || andre === "PAPEL" && joao === "PEDRA"
    || andre === "TESOURA" && joao === "PAPEL") {
    console.log("ANDRE");
  }else{
    console.log("EMPATE");
  }
}