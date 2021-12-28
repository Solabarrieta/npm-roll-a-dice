const dado = [
    "1", 
    "2", 
    "3", 
    "4", 
    "5", 
    "6"
]

const tirarDado = () => {
    const resultado = dado[Math.floor(Math.random()*dado.length)];
    console.log(resultado);
}

module.exports = {tirarDado};

