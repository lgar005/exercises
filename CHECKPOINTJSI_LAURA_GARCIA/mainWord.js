//1
let miNombre='Laura';
//2
let miApellido='Garcia';
//3
let miEdad=23;
//4
let miMascota='Sol';
//5
let edadMascota=4;
//6
console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);
//7
let nombreCompleto= miNombre + " "+ miApellido;
console.log(nombreCompleto);
//8
let textoPresentacion=miNombre+" "+miApellido+" "+miEdad+" "+miMascota+" "+edadMascota;
console.log(textoPresentacion);
//9
let sumaEdades= miEdad+edadMascota;
console.log(sumaEdades);
let restaEdades=miEdad-edadMascota;
console.log(restaEdades); 
let productoEdades=miEdad*edadMascota;
console.log(productoEdades); 
let divisionEdades=miEdad/edadMascota;
console.log(divisionEdades);
//10 (prompt)
let miNombreP=prompt('Ingrese su nombre');
console.log(miNombreP);
let miApellidoP=prompt('Ingrese su apellido');
console.log(miApellidoP);
let miEdadP=prompt('Ingrese su edad');
miEdadP=parseInt(miEdadP);
console.log(miEdadP);
let miMascotaP=prompt('Ingrese el nombre de su mascota');
console.log(miMascotaP);
let edadMascotaP=prompt('Ingrese la edad de su mascota');
console.log(edadMascotaP);
edadMascotaP=parseInt(edadMascotaP);
//visualizar datos ingresados con prompt
let nombreCompletoP= miNombreP + " "+ miApellidoP;
console.log(nombreCompleto);
let textoPresentacionP=miNombreP+" "+miApellidoP+" "+miEdadP+" "+miMascotaP+" "+edadMascotaP;
console.log(textoPresentacionP);
let sumaEdadesP= miEdadP+edadMascotaP;
console.log(sumaEdadesP);
let restaEdadesP=miEdadP-edadMascotaP;
console.log(restaEdadesP); 
let productoEdadesP=miEdadP*edadMascotaP;
console.log(productoEdadesP); 
let divisionEdadesP=miEdadP/edadMascotaP;
console.log(divisionEdadesP);
//OBJETOS
let alumno={
    nombre:'Juan',
    apellido: 'Casas',
    edad:'32',
    profesion:'Periodista',
    idioma: 'español',
};
console.table(alumno);
console.table(alumno.nombre);
console.table(alumno.apellido);
console.table(alumno.edad);
console.table(alumno.profesion);
console.table(alumno.idioma);
let MASCOTA={
    nombre:'Lucas',
    edad:6,
    tipoAnimal:'gato',
    noLeGusta:'frio',
    leGusta:'pollo',
}
console.table(MASCOTA);
console.table(MASCOTA.nombre);
console.table(MASCOTA.edad);
console.table(MASCOTA.tipoAnimal);
console.table(MASCOTA.noLeGusta);
console.table(MASCOTA.leGusta);
//ARRAYS
let frutas=["Fresa", "Manzana", "Sandia", "Uva", "Mora", "Cereza"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]);
let numeros=[10, -20, 95, 73, 54, 0];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
console.log(numeros[5]);
//ARRAY DE OBJETOS
const madre = {
    nombre:'Marcela',
    apellido: 'Cifuentes',
    edad:40,
};
const padre={
    nombre: 'Hector',
    apellido: 'Parra',
    edad:41,
}
const hijo1={
    nombre: 'Lina',
    apellido: 'Parra',
    edad:10,
}
const hijo2={
    nombre: 'Samuel',
    apellido: 'Parra',
    edad:5,
}
const abuela={
    nombre:'Marta',
    apellido: 'Cifuentes',
    edad:65,
}
let familia=[madre,padre,hijo1,hijo2,abuela];
console.log(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);
let textoAleatorio=frutas[1]+" "+numeros[3]+" "+ familia[4];
console.log(textoAleatorio);
//OPERADORES LOGICOS
let mi_edad=prompt("Mi edad");
let edad_compañero=prompt("Edad de un compañero");
let edadesIguales=mi_edad==edad_compañero;
let soyMayor=mi_edad>edad_compañero;
let soyMenor=mi_edad<edad_compañero;
alert('Mi edad es igual a la de mi compañero '+ edadesIguales);
alert('Mi edad es mayor a la de mi compañero '+ soyMayor);
alert('Mi edad es menor a la de mi compañero '+ soyMenor);
//COMPARAR EDAD CON 18
let edad_ingresada=prompt("Ingrese su edad");
let soyMayorDeEdad= edad_ingresada>=18;
alert('Soy mayor de edad ' + soyMayorDeEdad);
let edad=prompt('Ingrese su edad');
let altura=prompt('Ingrese su altura');
let puedeSubir= edad>6 && altura>=1.20;
alert('Puede subir a la atracción '+ puedeSubir);
let pase=prompt('Ingrese el tipo de pase');
let saldo=prompt('Ingrese su saldo');
let puedePasar= pase.toUpperCase()=='VIP' || saldo>1000;
alert('La persona puede pasar: '+ puedePasar);
