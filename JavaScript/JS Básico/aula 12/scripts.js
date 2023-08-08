function CadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: "Programadora",
        cod: "1234"
    }
    return novosDados;
}

console.log(CadastroPessoa({nome: "Larissa", sobrenome: "Cardoso", idade: 19}));