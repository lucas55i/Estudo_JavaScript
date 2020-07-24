function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value > ano) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')



        if (fsex[0].checked){
            genero = 'Homen'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', '/Modelo de Site2/img/Hcrianca.png')
            }else if (idade < 21){
                //Adolecente
                img.setAttribute('src', '/Modelo de Site2/img/Hadolecente.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', '/Modelo de Site2/img/Hadulto.png')
            }else{
               //Idoso 
               img.setAttribute('src', '/Modelo de Site2/img/Hvelho.png')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', '/Modelo de Site2/img/Mcrianca.png')
            }else if (idade < 21){
                //Adolecente
                img.setAttribute('src', '/Modelo de Site2/img/Madolecente.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', '/Modelo de Site2/img/Madulta.png')
            }else{
               //Idoso 
               img.setAttribute('src', '/Modelo de Site2/img/Mvelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade}`
        res.appendChild(img)
    }


}
