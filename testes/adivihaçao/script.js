var resposta = document.getElementById(`res`)
var resultado = document.getElementById(`resultado`)
var testar = document.getElementById(`testar`)



testar.addEventListener("click", function(){
    var numero = Math.floor(Math.random() * (6-1) + 1 )

    if (Number.parseInt(resposta.value) == numero) {
        resultado.innerHTML = `Parabens! eu estava pesando no ${numero}.`
    } else {
        resultado.innerHTML = `que pena... eu estava pesando no ${numero}.`
    }
})