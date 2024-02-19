function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if(hora>=0&&hora<12){
        img.src="Imagens/Manha.jpg"
        document.body.style.background="#B7AF90"
    }else if  (hora>=12 &&hora<18){
        img.src="Imagens/Tarde.jpg"
        document.body.style.background="#583347"
    }else{
        img.src="Imagens/Noite.jpg"
        document.body.style.background="#223A69"
    }
}
