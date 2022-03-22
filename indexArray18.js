let valores = [2, 3, 6, 4, 7, 8, 9, 0]; // array

valores.sort(); // organiza em ordem crescente

/*
for (let num = 0; num < valores.length; num++){ 
    console.log(`A posição ${num} tem o valor ${valores[num]}`)
}  

    var num = 0


for (let num in valores) {
    console.log(num[valores])
}
*/ 

for(let num in valores) {
    console.log(`A posição ${num} tem o valor ${valores[num]}`)
    
}

