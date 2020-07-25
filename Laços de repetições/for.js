const bolsaVanessa = [
    'cartão de crédito',
    'chaves',
    'dinheiro',
    'escova de cabelo',
    'lenço de papel',
    'perfume',
    'alcool gel'
]

for (let index = 0; index < bolsaVanessa.length; index++){
    console.log(`${index}. ${bolsaVanessa[index]}`)
    if ( bolsaVanessa[index] == 'dinheiro')break
} 