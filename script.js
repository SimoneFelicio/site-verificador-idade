function clicar(){
    var ano = window.document.getElementById('ano')
    var agora = new Date()
    var anoatual = agora.getFullYear()
    

    var res = window.document.getElementById('res')

    if (ano.value.length == 0 || ano.value > anoatual){
        window.alert('ERRO! Verifique os dados e tente novamente.')
    }
    else{
        var sexo = window.document.getElementsByName('sexo')
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        var idade = anoatual - Number(ano.value)
        var genero = ''
        if (sexo[0].checked){
            genero = 'Homem'
            if (idade < 10){
                img.setAttribute('src', 'imagens/foto-bebe-m.png') 
            }
            else if (idade < 21){
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            }
            else if (idade < 50){
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            }
            else{
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        }
        else{
            genero = 'Mulher'
            if (idade < 10){
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            }
            else if (idade < 21){
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            }
            else if (idade < 50){
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            }
            else{
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.</br>`
        res.appendChild(img)
    }
}

