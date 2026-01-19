let v = prompt(`Quale è il tuo voto?`);
console.log(v);

// if/else

if(v > 0 && v < 18){
    console.log(`Insufficiente`);
}else if(v >= 18 && v < 21){
    console.log(`Sufficiente`);
}else if(v >= 21 && v < 24){
    console.log(`Buono`);
}else if(v >= 24 && v < 27){
    console.log(`Distinto`);
}else if(v >= 27 && v <= 29){
    console.log(`Ottimo`);
}else if(v == 30){
    console.log(`Eccellente`);
}else{
    console.log(`Valore non valido`);  
}

// Switch

switch (true) {
    case v > 0 && v < 18:
    console.log(`Insufficiente`);
    break;
    case v >= 18 && v < 21:
    console.log(`Sufficiente`);
    break;
    case v >= 21 && v < 24:
    console.log(`Buono`);
    break;
    case v >= 24 && v < 27:
    console.log(`Distinto`);
    break;
    case v >= 27 && v <= 29:
    console.log(`Ottimo`);
    break;
    case v == 30:
    console.log(`Eccellente`);
    break;
    
    default:
    console.log(`Valore non valido`);
    break;
}

