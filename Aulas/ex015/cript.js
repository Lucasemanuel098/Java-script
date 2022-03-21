function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('verifique o ano e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                res.innerHTML = `Detectamos uma Criança, ${genero} com ${idade} anos`
            }
            else if (idade >= 10 && idade < 18) {
                //jovem
                res.innerHTML = `Detectamos um jovem, ${genero} com ${idade} anos`
            } 
            else if (idade >= 18 && idade < 55 ) {
                //adulto
                res.innerHTML = `Detectamos um adulto, ${genero} com ${idade} anos`
            }
            else {
                //idoso
                res.innerHTML = `Detectamos um idoso, ${genero} com ${idade} anos`
            }
        }else if (fsex[1].checked) {
                genero = 'mulher'
                if (idade >= 0 && idade < 10) {
                    //criança
                    res.innerHTML = `Detectamos uma Criança, ${genero} com ${idade} anos`
                }
                else if (idade >= 10 && idade < 18) {
                    //jovem
                    res.innerHTML = `Detectamos uma jovem, ${genero} com ${idade} anos`
                } 
                else if (idade >= 18 && idade < 55 ) {
                    //adulto
                    res.innerHTML = `Detectamos uma adulta, ${genero} com ${idade} anos`
                }
                else {
                    //idoso
                    res.innerHTML = `Detectamos uma idosa, ${genero} com ${idade} anos`
                }
        }
        res.getElementsByClassName.textalign = 'center'
        
    }

}