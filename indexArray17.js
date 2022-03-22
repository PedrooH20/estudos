let num = [5, 6, 7, 3, 1, 0]; // Declarar mais de um valor na variavel

num[6] = 4; // Adiciona valor na casa pré-definida
num.push(8); // Adiciona valor na ultima casa 

num.length; // Quantidade de valores
num.sort() // Organiza em ordem cresce
num.indexOf() // Mostra em que posição está armazenado o valor

console.log(`Nosso vetor é o ${num}`);
console.log(num.length); // Quantidade de valores
console.log(`${num[5]}`); // Mostra o valor em determinada casa 

let pos = num.indexOf(4)
console.log(`O valor 4 está na posição ${pos}`)

let fruits = [
    'banana',
    'maça',
    'abacate'
];
console.log(`A fruta é ${fruits[2]}`);
console.log(fruits);
