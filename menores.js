
const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];

const arrayA1 = [5, 32, 3, 44, 1];
const arrayB1 = [57, 4, 21, 2, 13];

const comparação = []
const comparação1 = []

for (let índice1 = 0; índice1 < arrayA.length; índice1++) {
    const compararA = arrayA[índice1];

    for (let índice = 0; índice < arrayB.length; índice++) {
        const compararB = arrayB[índice1];
        compararA <= compararB ? comparação.push(compararA) : comparação.push(compararB)
        break
    }
}

let comparador = 0
while (comparador < arrayA1.length) {

    arrayA1[comparador] <= arrayB1[comparador] ? comparação1.push(arrayA1[comparador]) : comparação1.push(arrayB1[comparador])
    comparador++
}

console.log(comparação);
console.log(comparação1);