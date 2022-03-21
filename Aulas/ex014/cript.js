function carregar() {

    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('div#foto')
    var data = new Date()
    //var hora = data.getHours() 
    var hora = 10




    msg.innerHTML = `agora são ${hora} horas.`

    if (hora >= 0 && hora <= 12) {
        //bom dia
        img.src = "dia.png"
    } else if ( hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = "tarde.png"
        
    } else {
        //boa noite
        img.src = "noite.png"
    }
}