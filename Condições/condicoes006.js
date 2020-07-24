var agr = new Date() //Puxa a hora atual 
var hora = agr.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12){
    console.log('Bom Dia!!')
} else if (hora <= 18){
    console.log('Boa tarde!!')
}else{
    console.log('Boa NOite!!')
}