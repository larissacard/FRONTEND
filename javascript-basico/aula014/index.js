let num = [2,6,4,1,3];


num.push(5);

console.log('-=-=-= For Normal -=-=-=')
console.log(`A let num tem ${num.length} items`);
for(let i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

console.log('-=-=-= For Simplificado -=-=-= ')
for(let i in num){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

console.log('-=-=-= Usando Sort -=-=-=')
console.log(num.sort())

