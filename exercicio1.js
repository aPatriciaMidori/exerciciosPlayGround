function transformaParaMaiusculo(palavras) {
    let novoArray = []
    for (var i = 0; i < palavras.length; i++) {
        var maiuscula = palavras[i]
        novoArray.push(maiuscula.toUpperCase())
    }
    return novoArray
} 
console.log(transformaParaMaiusculo(["patricia", "midori"]))