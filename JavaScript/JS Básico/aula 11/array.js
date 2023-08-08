//Desconstrução de arrays e objetos

//Objeto
const pessoa = {
    nome: "Larissa",
    sobrenome: "Cardoso",
    idade: 19,
    cargo: "Desenvolvedora"
}

//Desconstruindo
let {nome} = pessoa;
// retorna "Larissa"

let { sobrenome } = pessoa;
//retorna "Cardoso"

//mudando cargo do objeto pessoa
let { cargo: programador } = pessoa;

//Array
let nomes = ["Lari", "Duda", "Aline"];

//Desconstruindo
let { 1:segundonome } = nomes;
//resposta "Duda"

