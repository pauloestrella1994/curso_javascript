function verificar(){
    var dat = new Date()
    var ano = dat.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano){
        window.alert("[ERRO] Verificar os dados e tente novamente")
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'images/foto-bebe-m.png')
            }
            else if (idade < 21){
                // JOvem
                img.setAttribute('src', 'images/foto-jovem-m.png')
            }
            else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'images/foto-adulto-m.png')
            }
            else {
                // idoso
                img.setAttribute('src', 'images/foto-idoso-m.png')
            }
        }
        else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'images/foto-bebe-f.png')
            }
            else if (idade < 21){
                // JOvem
                img.setAttribute('src', 'images/foto-jovem-f.png')
            }
            else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'images/foto-adulto-f.png')
            }
            else {
                // idoso
                img.setAttribute('src', 'images/foto-idoso-f.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    
}

