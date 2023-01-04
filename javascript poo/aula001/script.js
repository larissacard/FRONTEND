class Produtos {
    
    constructor(){
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;
    }
    
    salvar(){
        let produtos = this.lerDados();

        if(this.validarCampos(produtos)){
            if(this.editId == null){
                this.adicionar(produtos)
            } else {
                this.editar(this.editId, produtos);
            }
        }

        this.listaTabela();
        this.cancelar();
    }

    adicionar(produtos){
        produtos.valor = parseFloat(produtos.valor)
        this.arrayProdutos.push(produtos)
        this.id++;
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        
        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();
            
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nome;
            td_valor.innerText = this.arrayProdutos[i].valor;

            let imgEdit = document.createElement('img');
            imgEdit.src = 'assets/editar.png';
            imgEdit.setAttribute('onclick', 'produtos.prepararEdicao(' + JSON.stringify(this.arrayProdutos[i]) + ')')
            
            let imgDelete = document.createElement('img');
            imgDelete.src = 'assets/botao-apagar.png';
            imgDelete.setAttribute('onclick','produtos.deletar(' + this.arrayProdutos[i].id + ')')
            
            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
        }
    }

    validarCampos(produtos){
        let msg = '';
        if(produtos.nome  == ''){
            msg += 'Informe o nome do produto. \n'
        }

        if(produtos.valor  == ''){
            msg += 'Informe o valor do produto. \n'
        }

        if(msg != ''){
            alert(msg)
            return false
        }
        return true
    }

    cancelar(){
        document.getElementById('produto').value = '';
        document.getElementById('valor').value = '';

        document.getElementById('btn1').innerText = 'Salvar'; 
    }

    lerDados(){
        let produtos = {}

        produtos.id = this.id;
        produtos.nome = document.getElementById('produto').value;
        produtos.valor = document.getElementById('valor').value;


        return produtos
    }

    prepararEdicao(dados){
        this.editId = dados.id;
        document.getElementById('produto').value = dados.nome;
        document.getElementById('valor').value = dados.valor;

        document.getElementById('btn1').innerText = 'Atualizar'
    }

    editar(id, produtos){
        for(let i = 0;i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id === id){
                this.arrayProdutos[i].nome = produtos.nome;
                this.arrayProdutos[i].valor = produtos.valor;
            }
        }
    }


    deletar(id){
        if(confirm('Deseja realmente deletar o produto do ID '+id)){
            let tbody = document.getElementById('tbody');
            
            for(let i = 0; i < this.arrayProdutos.length; i++){
                if(this.arrayProdutos[i].id === id){
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }
    }

}

var produtos = new Produtos();