//Includes

const nomes = ['Larissa', 'Joao', 'Lucas'];

console.log(nomes.includes('Lucas'));

if(nomes.includes('LALI')){
    console.log('LARISSA ESTA NA LISTA');
}
else{
    console.log('NÃO ESTA NA LISTA  ')
}

//endsWith

let name = 'Larissa';
console.log(name.endsWith('s'))


//startsWith

let sobrenome = 'Cardoso';
console.log(sobrenome.startsWith('C'));

//Some

let names = ['João', 'Lucas', 'Larissa'];
console.log(names.some(names => names === 'João'));


//Every

let sobrenomes = [
    {nome: 'João', idade: 18},
    {nome: 'Maria', idade: 25},
    {nome: 'Larissa', idade: 19}
]

console.log(sobrenomes.every(sobrenomes => sobrenomes.idade >=18))

if((sobrenomes.every(sobrenomes => sobrenomes.idade >=18))){
    console.log('Todos maiores de 18');
}else{
    console.log('ops, alguém não é de maior')
}