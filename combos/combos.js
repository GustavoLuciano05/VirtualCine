function voltar(){
    window.location.href=("../telaInicial/novaTelaInicial.html");
}
var i = 0
function carrinho(){
     
     var carrinho = document.getElementById('carrinho');
     
  
    i++;
     
     if(i === 1) {
        carrinho.style.position = 'fixed';
        carrinho.style.width = '30%';
        carrinho.style.height = '50%';
        
     } else {
        carrinho.style.position = 'relative';
        carrinho.style.width = '70%';
        carrinho.style.height = '90%';
        carrinho.classList.add("carrinho");
        i = 0;
     }
  
}