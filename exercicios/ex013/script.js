function verificar(){
    var data= new Date()
    var ano= data.getFullYear() 
    var fano = document.getElementById("iano") //pegando o ano informado
    var res = document.getElementById("res")  //pegando o "Click em verificar"
    if (fano.value.length ==0 || fano.value>ano){ //se ano nao for preenchido ou maior que o ano atual
        window.alert("ERRO: Verifique os dados e tente novamente!")
    }else{
        var fsex= document.getElementsByName("radsex") //pegar elemento selecionado no radio
        var idade = ano - fano.value //ano atua - ano informado
        var img = document.createElement("img") //criando um img
        img.setAttribute('id','foto') // como se fosse no html e colocoasse img id="foto"
        var genero ="" 
        if(fsex[0].checked){ 
            genero= "Homem"
            if(idade>=0 && idade<10){
                img.setAttribute('src','imagens/BB H.jpg') //criando atributo no img (src e a imagem)
            }else if(idade<21){
                img.setAttribute('src','imagens/Jovem H.jpg')
            }else if (idade<50){
                img.setAttribute('src','imagens/Adulto H.jpg')
            }else{
                img.setAttribute('src','imagens/Idoso H.jpg')
            }
        }else{
            genero= "Mulher"
            if(idade>=0 && idade<10){
                img.setAttribute('src','imagens/BB M.jpg')
            }else if(idade<21){
                img.setAttribute('src','imagens/Jovem M.jpg')
            }else if (idade<50){
                img.setAttribute('src','imagens/Adulto M.jpg')
            }else{
                img.setAttribute('src','imagens/Idoso M.jpg')
            }
        }
        res.style.textAlign="center" //colocando centralizadoo
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` // colocando para aparecer texto
        res.appendChild(img) //colocando para aparecer a imagem
    }
}


