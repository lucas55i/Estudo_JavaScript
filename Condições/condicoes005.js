//Condições aninhadas
var idade = 78
console.log(`Voce tem ${idade} anos.`)
if(idade < 16){
    console.log(`Não vota vota`)
}else if(idade < 18 || idade > 65){
    console.log(`Voto opcional`)
} else{
    console.log('Voto obrigatorio')
}
    