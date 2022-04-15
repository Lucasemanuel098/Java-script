var agora = new Date()
var diasem = agora.getDay()

diasem = 8

switch (diasem) {
    case 0:
        diasem = 'Domingo'
    break
    case 1:
        diasem = 'Segunda'
    break
    case 2:
        diasem = 'Terça'
    break
    case 3:
        diasem = 'Quarta'
    break
    case 4:
        diasem = 'Quinta'
    break
    case 5:
        diasem = 'Sexta'
    break
    case 6:
        diasem = 'Sábado'
    break
    default:
        diasem = '==DIA INVALIDO=='
}

console.log (`Hoje é ${diasem}, tenha um bom dia`)