//Ejercicio "Mi primer JavaScript"
let primerNombre='Laura';
console.log(primerNombre);
let segundoNombre='Nathalia';
console.log(segundoNombre);
let primerApellido='Garcia';
console.log(primerApellido);
let segundoApellido='Acuña';
console.log(segundoApellido);
let edad=23;
console.log(edad);
let miPasatiempo='Leer';
console.log(miPasatiempo);
const persona={
    nombre:'Laura',
    apellido: 'Garcia',
    edad:23,
    pasatiempo:'leer',
}
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.pasatiempo);
const hermano={
     nombre:'Santiago',
     apellido: 'Garcia',
     edad:18,
     pasatiempo:'futbol',
};
console.log(hermano);
console.log(hermano.nombre);
console.log(hermano.apellido);
console.log(hermano.edad);
console.log(hermano.pasatiempo);
const MASCOTA={
    nombre:'Sol',
    edad:4,
    animal:'gato',
    leGusta:'Pollo',
    noLeGusta:'frio',
};
console.log(MASCOTA);
console.log(MASCOTA.nombre);
console.log(MASCOTA.edad);
console.log(MASCOTA.animal);
console.log(MASCOTA.leGusta);
console.log(MASCOTA.noLeGusta);
let paisesAConocer=["Japon", "Australia", "China"];
console.log(paisesAConocer);
console.log(paisesAConocer[0]);
console.log(paisesAConocer[1]);
console.log(paisesAConocer[2]);

//TOMANDO DESICIONES
if(hermano.edad<18){
    console.log("Es menor de edad");
}else{
    console.log("Es mayor de edad");
}


switch(MASCOTA.animal){
    case 'gato':
      console.log("Pertenece a la familia de los felinos");
      break;
    case 'perro':
        console.log("Pertenece a la familia de los caninos");
        break;
    case 'pez':
        console.log("Pertenece a la familia de los vertebrados acuáticos");
        break; 
    case 'canarios':
        console.log("Pertenece a la familia de los fringílidos");
        break;
    default:
        console.log("La mascota no se encuetra dentro del grupo definido");    
        break;                   
}