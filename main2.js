let temp = prompt(`Inserisci il valore della temperatura`)

if (temp < -10) {
    console.log(`Copriti...ancora ti raffreddi`);
} 
else if (temp >= -10 && temp < 0) {
    console.log(`Non è tanto il freddo quanto l'umidità`);
}
else if (temp >= 0 && temp < 20){
    console.log(`Non ci sono più le mezze stagioni`);
}
else if (temp >= 20 && temp < 30){
    console.log(`Mi dia una peroni sudata`);
}
else if (temp >= 30){
    console.log(`Lu mare, lu sole, lu ientu`);
}else{
    console.log(`Valore non valido`);
}



switch (true) {
    case temp < -10:
    console.log(`Copriti...ancora ti raffreddi`);
    break;
    case temp >= -10 && temp < 0:
    console.log(`Non è tanto il freddo quanto l'umidità`);
    break;    
    case temp >= 0 && temp < 20:
    console.log(`Non ci sono più le mezze stagioni`);
    break;   
    case temp >= 20 && temp < 30:
    console.log(`Mi dia una peroni sudata`);
    break;   
    case temp >= 30:
    console.log(`Lu mare, lu sole, lu ientu`);
    break;
    default:
    console.log(`Valore non valido`);
    break;
}