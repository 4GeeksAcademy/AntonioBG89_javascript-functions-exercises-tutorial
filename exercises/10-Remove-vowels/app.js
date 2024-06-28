// Your code goes here
const rapid = (myString) => {
    let buscaConsonantes = [];

    for(let letras of myString.toLowerCase()) {
        if(['a','e','i','o','u'].includes(letras) == false)
            buscaConsonantes.push(letras.toUpperCase())
    }
    return buscaConsonantes.join('');
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
