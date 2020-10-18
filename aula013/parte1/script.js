function carregar() {
    var msg = document.getElementById("msg")
    var img = document.querySelector('img#imagem')
    var dat = new Date()
    var hora = dat.getHours()
    var min = dat.getMinutes()
    var seg = dat.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${min}:${seg} horas`

    if (hora >= 5 && hora < 12){
        // BOM DIA 
        imagem.src = 'images/manha.jpeg'
        document.body.style.background = '#acac50'
        saud.innerHTML = "Bom Dia!" 
    }
    else if (hora >= 12 && hora < 18){
        // BOA TARDE 
        imagem.src = 'images/tarde.jpeg'
        document.body.style.background = '#300e0e10'
        saud.innerHTML = "Boa Tarde!"
    }
    else {
        // BOA NOITE 
        imagem.src = 'images/noite.jpeg'
        document.body.style.background = '#441b44'
        saud.innerHTML = "Boa Noite!"
    }

}

