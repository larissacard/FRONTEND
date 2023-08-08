function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem')
    var data = new Date();
    var hora = data.getHours();

    if(hora > 0 && hora < 12){
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        img.src = 'assets/morning.jpg'
        document.body.style.background = '#9ac6ed'
    } else {
        if(hora >= 12 && hora <= 18){
            msg.innerHTML = `Boa tarde! Agora são ${hora} horas.` 
            img.src = 'assets/afternoon.jpg'
            document.body.style.background = '#da9751'
        } else {
            msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
            img.src = 'assets/night.jpg'
            document.body.style.background = '#755e7f'
        }
    }
}

