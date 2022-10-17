var p = document.getElementById('contador')
var adicionar = document.getElementById('adicionar')
var regressar = document.getElementById('regressar')
var resetar = document.getElementById('resetar')


var contador = 0


adicionar.addEventListener("click", function(){
    contador++
    p.innerHTML = contador
})

regressar.addEventListener("click", function(){
    contador--
    p.innerHTML = contador
})

resetar.addEventListener("click", function(){
    contador = 0
    p.innerHTML = contador
})


