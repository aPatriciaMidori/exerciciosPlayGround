let totalEntradas = 0
let entradasAcimaDe20 = 0

function calcularNumeroDeEntradas(placa){
   for (var i = 0; i < placas.length; i++){
      if(placas[i] == placa){
         totalEntradas++
      }
   }
   return totalEntradas
}
 
function calcularValorDevido(placa){
    const quantidade = calcularNumeroDeEntradas(placa)
   if (totalEntradas <= 20){
    return totalEntradas * 10
   } else if (totalEntradas > 20){
    entradasAcimaDe20 = totalEntradas - 20
   }
   return entradasAcimaDe20 * 5 + 200
}

/* Esse array é utilizado dentro das funções. Cada placa neste array representa uma entrada do respectivo veículo no estacionamento. Não é necessário alterar esse array. */
var placas = [
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'ORO-7142', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'ORO-7142', 'RXB-2525', 'AKX-3333', 'AKX-3333',
    'ORO-7142', 'ORO-7142', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'AKX-3333', 'RXB-2525'
 ] 

 
 console.log(calcularValorDevido ('AKX-3333'))