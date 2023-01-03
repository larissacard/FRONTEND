class Produto {
    constructor(){
        this.id = 0;
        this.nome = '';
        this.valor = 0;
    }
    
    adicionar(){
        alert('Adicionar item');
    }

    excluir(){
        alert('Excluir item')
    }
}

var produto = new Produto();