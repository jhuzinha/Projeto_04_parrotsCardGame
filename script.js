
const imagens = ["imagens/bobrossparrot.gif", "imagens/explodyparrot.gif", "imagens/fiestaparrot.gif", "imagens/metalparrot.gif", 
  "imagens/revertitparrot.gif", "imagens/tripletsparrot.gif", "imagens/unicornparrot.gif"]
let quantidade;
let elemento1;
let imagem1;
let contador = 0;
let limite;

function comparador() { 
	return Math.random() -0.5; 
}

function EscolherQuantidade(){
  let aparecerCartas; 
  aparecerCartas = document.querySelector(".container-cards")  
  aparecerCartas.innerHTML = ' ';
  contador = 0;
  limite = 2;
  imagens.sort(comparador)

  const ListadeImagens = []

  quantidade = Number(prompt("Escolha a quantidade de cartas: (4,6,8,10,12 ou 14)"))
  while (quantidade % 2 != 0 || quantidade > 14 || quantidade < 4) {
    quantidade = prompt ("Escolha a quantidade de cartas: (4,6,8,10,12 ou 14)")  
  }

  let QuantidadedeCartas = imagens.slice(0, quantidade/2)
  
  for (i = 0; i < QuantidadedeCartas.length; i++) {
  ListadeImagens.push(QuantidadedeCartas[i]);
  ListadeImagens.push(QuantidadedeCartas[i]);
}
  
  ListadeImagens.sort(comparador);
  for (let i = 0; i < quantidade; i++){
    aparecerCartas = document.querySelector(".container-cards")  
    aparecerCartas.innerHTML += `
              <div class="card" onclick = "virarCartas(this)">
                <div class="front-face face">
                <img src="imagens/front.png" alt="">
                </div>
                <div class="back-face face">
                <img src=${ListadeImagens[i]}>
                </div>
             </div>`
  }
}
 
function virarCartas(elemento){
  if (elemento.classList.contains("to-turn")){
    return
  }
  if (document.querySelectorAll(".card.to-turn").length >= limite){
    return
  }  
   
  elemento.classList.add("to-turn")
  

  let CartasViradas = document.querySelectorAll(".to-turn")
  contador++
  if ((CartasViradas.length)%2 !== 0){
    elemento1 = elemento;
    imagem1 = elemento1.querySelector(".back-face img").src
  }

  if ((CartasViradas.length)%2 === 0) {
    let imagem2 = elemento.querySelector(".back-face img").src
    CompararCartas(imagem1, imagem2, elemento1, elemento)
  }

  function CompararCartas(imagem1, imagem2, elemento1, elemento){
    if (imagem1 != imagem2) {
      setTimeout(function remover(){elemento.classList.remove('to-turn')
      elemento1.classList.remove("to-turn")} , 1000);
     
    }  
    if (imagem1 == imagem2){
      limite += 2
    }
    setTimeout(FinalizarPartida, 1050)
  }
}

function FinalizarPartida(){
  let quantidadetoturn = document.querySelectorAll(".card.to-turn")
  if (quantidadetoturn.length == quantidade){
    alert(`Voc?? ganhou em ${contador} jogadas!`)
    reiniciarPartida()
  }
}

function reiniciarPartida() {
  let resposta = prompt("Quer reiniciar a partida?(sim ou n??o)")
  while (resposta !== 'n??o' && resposta !== 'sim'){
    resposta = prompt("Quer reiniciar a partida?(sim ou n??o)")
    }
  if (resposta === 'sim') {
    EscolherQuantidade()
  }
  if (resposta === 'n??o'){
    alert("Okay")
  }
}

EscolherQuantidade()
