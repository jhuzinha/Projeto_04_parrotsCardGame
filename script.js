function comparador() { 
	return Math.random() -0.5; 
}

function EscolherQuantidade(){
  const imagens = ["imagens/bobrossparrot.gif", "imagens/explodyparrot.gif", "imagens/fiestaparrot.gif", "imagens/metalparrot.gif", 
  "imagens/revertitparrot.gif", "imagens/tripletsparrot.gif", "imagens/unicornparrot.gif"]
  const ListadeImagens = []


  let quantidade = Number(prompt("Escolha a quantidade de cartas: (4,6,8,10,12 ou 14)"))
  while (quantidade % 2 != 0 || quantidade > 14 || quantidade < 4) {
    quantidade = prompt ("Escolha a quantidade de cartas: (4,6,8,10,12 ou 14)")  
  }

  let QuantidadedeCartas = imagens.slice(0, quantidade/2)
  
  for (i = 0; i < QuantidadedeCartas.length; i++) {
    ListadeImagens.push(QuantidadedeCartas[i]);
    ListadeImagens.push(QuantidadedeCartas[i]);
  }
  console.log(QuantidadedeCartas)
  console.log(ListadeImagens)
  ListadeImagens.sort(comparador);
  console.log(ListadeImagens)
  for (let i = 0; i < quantidade; i++){
    const aparecerCartas = document.querySelector(".container-cards")   
    aparecerCartas.innerHTML += `
              <div class="card" onclick = "virarCartas(this)">
                <div class="front-face front-card ">
                <img src="imagens/front.png" alt="">
                </div>
                <div class="back-face front-card ">
                <img src=${ListadeImagens[i]}>
                </div>
             </div>`
  }
}

function CliquenaCarta(){


}




EscolherQuantidade()