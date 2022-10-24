let quadrado = document.getElementById(`quadrado`)
let personagem = document.getElementById(`personagem`)
var tempo = window.document.getElementById(`tempo`)

function pular() {
    if(personagem.classList != `animar`){
        personagem.classList.add(`animar`)
    }
    setTimeout(function(){
        personagem.classList.remove(`animar`)
    }, 500)
}




var testarColisao = setInterval( function(){

    var topoPersonagem = parseInt(
     window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
       )

       if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 130){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Você perdeu!')
    }
    

}, 10)


var addtempo = setInterval(
    tempo.innerHTML = parent(addtempo) + 1
)