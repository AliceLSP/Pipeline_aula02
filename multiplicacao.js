function multiplicacao(a, b){
    if(a == 0){
        return 0;
    }
    return a * b;
}

function soma(a, b) { 
    let resultado = a + b; 
    let x = 10; // variável inútil 
    return resultado; 
}

function soma(a, b) { 
    return a + b; 
} 

function soma2(a, b) { 
    return a + b; 
}

// function soma(a, b) { 
//     eval("console.log('teste')"); // linha problemática 
//     return a + b; 
// } 

module.exports = { multiplicacao, soma };