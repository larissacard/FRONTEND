// funcao entrar

function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome: ');

    if(texto == '' || texto == null){
        //se não for informado nenhum nome ele abre o alert novamente
        var texto = prompt('Digite seu nome novamente: ');
        area.innerHTML = 'Bem vindo ' + texto;

    }
    else{
        area.innerHTML = 'Bem vindo ' + texto;
    }
}

//Método dois que pega apenas o sobrenome
function entrar2(nome){
    var area = document.getElementById('area2');
    var texto2 = prompt('Digite seu sobrenome: ');

    area.innerHTML = nome + ' ' + texto2;
}