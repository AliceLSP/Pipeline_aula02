function multiplicacao(a, b){
    return a * b;
}

function soma(a, b) { 
    let resultado = a + b; 
    let x = 10; // variável inútil 
    return resultado; 
}

// function soma(a, b) { 
//     eval("console.log('teste')"); // linha problemática 
//     return a + b; 
// } 

module.exports = { multiplicacao, soma };