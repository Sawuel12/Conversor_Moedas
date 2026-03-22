const taxasDeCambio = {
  //Utilizacao de uma moeda base para facilitar a conversao
  USD: 1.0,
  BRL: 5.0,
  AOA: 920.0,
};

//Documentacao oficial "JSDOC"
/** 
@param {number} valor            //Valor total a ser convertido
@param {string} moedaOrigem      //Moeda que sera convertida
@param {string} moedaDestino     //Moeda a qual sera convertida
@returns {number}                //Valor convertido
*/

export function converterMoeda(valor, moedaOrigem, moedaDestino) {
  //Verificacao para saber se os valores e as moedas sao validas
  if (!valor || valor <= 0) return 0;

  if (!taxasDeCambio[moedaOrigem] || !taxasDeCambio[moedaDestino]) {
    return 0;
  }

  const valorEmDolar = valor / taxasDeCambio[moedaOrigem]; //Conversao para a moeda base
  const valorFinal = valorEmDolar * taxasDeCambio[moedaDestino]; //Conversao para a moeda destino
  return parseFloat(valorFinal.toFixed(2)); //Resultado limitando a 2 casas decimais
}
