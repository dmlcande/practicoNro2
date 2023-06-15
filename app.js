/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = parseInt(prompt("Escriba su edad"));

if(edad>=18){
    alert("ya puede conducir");
}
else if (isNaN(edad)){   //revisar por que NO funciona.
    alert("introduce una edad valida");
}
else{
    alert("no puede manejar");
} 


/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.


let nota = parseInt(prompt("digite un num"));

if(nota >= 0 || nota <= 10){
    switch (nota) {
        case 0:
        case 1:
        case 2:
            document.write("Muy deficiente");
            break;
        case 3:
        case 4:
            document.write("Insufi");
            break;
        case 5:
        case 6:
            document.write("sufi");
            break;
        case 7:
            document.write("bien");
            break;
        case 8:
        case 9:
            document.write("notable");
        case 10:
            document.write("sobresaliente");
            break;
    
        default:
            alert("numero erroneo");
            break;
    }
} else{
    !isNaN (nota); // es para preguntar si la nota NO es un numero, por eso el signo de admiracion.
    alert("introduce un numero valido");
}

/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm()


let cadenasDeTexto = "";
let continuar = true;
let aux = 1;
let cadena = "";

while (continuar) {

    if (aux == 1) {
        cadena = prompt("Escriba aqui");
        if (cadena != null) {
            cadenasDeTexto = cadena;
            aux = 2;
        }
        continuar = confirm("Desea continuar escribiendo?");
    } else {
        cadena = prompt("Escriba aqui");
        if (cadena != null) {
            cadenasDeTexto = cadenasDeTexto + "-" + cadena;
        }
        continuar = confirm("Desea continuar escribiendo?");
    }
}

console.log(cadenasDeTexto);

/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


let numerito = 0;
let pregunta = true;
let suma = 0;

while (pregunta) {
    let pedir = parseInt(prompt("ingrese un numero"));
    if (!isNaN(pedir)) {
        suma += pedir;
    } else{
        alert("Escribi bien el numero por favor");
    } 
    pregunta = confirm("Desea continuar sumando numeritos?");
}

console.log("La suma de todos los numeros ingresados es", suma);



/* 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar». 

Paso a paso:
ingrese su dni.
verificar que el dni este entre 0 y 9999999.
si esta dentro de ese rango, calcular el resto de la division entre el numero ingresado y el numero 23.
segun el resultado del resto, del 0 al 22 le correspondera una letra por caso.
si el numero NO es valido, avisar con un alert y volver a pedir que lo ingrese.
repetirse hasta que apriete cancelar.


let dni = 0;
let preguntAlert = true;
let resto = 0;

while (preguntAlert) {
    dni = parseInt(prompt("Ingrese un DNI"));
    if (dni > 0 && dni < 99999999) {
        resto = dni % 23;
        switch (resto) {
            case 0:
                console.log("T");
                break;
            case 1:
                console.log("R");
                break;
            case 2:
                console.log("W");
                break;
            case 3:
                console.log("A");
                break;
            case 4:
                console.log("G");
                break;
            case 5:
                console.log("M");
                break;
            case 6:
                console.log("Y");
                break;
            case 7:
                console.log("F");
                break;
            case 8:
                console.log("P");
                break;
            case 9:
                console.log("D");
                break;
            case 10:
                console.log("X");
                break;
            case 11:
                console.log("B");
                break;
            case 12:
                console.log("N");
                break;
            case 13:
                console.log("J");
                break;
            case 14:
                console.log("Z");
                break;
            case 15:
                console.log("S");
                break;
            case 16:
                console.log("Q");
                break;
            case 17:
                console.log("V");
                break;
            case 18:
                console.log("H");
                break;
            case 19:
                console.log("L");
                break;
            case 20:
                console.log("C");
                break;
            case 21:
                console.log("K");
                break;
            case 22:
                console.log("E");
                break;
        }
        preguntAlert = false;
    } else {
        preguntAlert = alert("El valor ingresado no es un DNI valido");
    }
}


/* 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….



for (let i = 1 ; i < 31 ; i++) {
    let aux = i + "";
    console.log(aux.repeat(i));
    //OTRA FORMA DE RESOLVER USANDO UNA SOLA LINEA: console.log(String(i).repeat(i));
}


/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1



let numero = parseInt(prompt("Ingrese un numero"));

if (numero <= 50){
    for (let i = numero; i > 0; i--) {
    console.log(i.toString().repeat(i));    
    }
}
else {
    console.log("El numero debe ser menor o igual a 50");
}

OTRA FORMA DE RESOLVERLO EN UNA SOLA LINEA Y SIN USAR IF/ELSE: numero = (numero>50) ? 50 : numero;
La linea de arriba se lee: si se da la condicion, dar el valor que esta despues del signo de pregunta, y si no
se da la condicion, darle el valor que esta despues de los dos puntos. Y fuerza que sea 50 si ponen mayor a 50.
*/

/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……



let numero = parseInt(prompt("Ingrese un numero"));

if (numero >= 1 && numero <= 50){
    for (let i = 1; i <= numero ; i++) {
        let aux = i + "";
        console.log(aux.repeat(i));
    }
}


/* 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10 


deben aparecer los numeros del 1 al 500.
indicar los numeros que sean multiplos de 4 y los que sean multiplo de 9.
cada 5 lineas mostrar: ------------------------------------------------ .

 

for (let i = 1; i < 501; i++){
    if (i % 4 === 0){
        console.log(`${i} es multiplo de 4.`);
    }
    else if(i % 9 === 0){
        console.log(`${i} es multiplo de 9.`);
    } else {
        console.log(i);
    }
    if (i % 5 === 0) {
        console.log("-------------------------------------------");
    }
}



/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.


 let columnas = parseInt(prompt(`ingrese el numero de columnas`));
 let filas = parseInt(prompt(`ingrese el numero de filas`));
 let numero = columnas * filas;
 let celda;

 for (let i = 0; i < columnas; i++) {
     for (let j = 0; j < filas; j++) {
         celda = numero;
         numero = numero - 1;
         console.log(`el valor de la celda de la columna ${i+1} y fila ${j+1} tiene el valor: ${celda} `);
     }
  
 }

/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() 


let nombre1 = prompt("Ingrese el primer nombre:");
let edad1 = parseInt(prompt("Ingrese su edad:"));

let nombre2 = prompt("Ingrese el segundo nombre:");
let edad2 = parseInt(prompt("Ingrese su edad:"));

let nombre3 = prompt("Ingrese el tercer nombre:");
let edad3 = parseInt(prompt("Ingrese su edad:"));

let maximo = Math.max(edad1, edad2, edad3);

if (maximo == edad1) {
    console.log("El mayor es: " + nombre1);
}
if (maximo == edad2) {
    console.log("El mayor es: " + nombre2);
}
if (maximo == edad3) {
    console.log("El mayor es: " + nombre3);
}

/* 12- Realiza un script que genere un número aleatorio entre 1 y 99. 

let i = true;
let numeroAleatorio;
while (i) {
    numeroAleatorio = Math.floor(Math.random()*100);
    if (numeroAleatorio > 0 && numeroAleatorio < 100) {
        i = false ;
    }
}
console.log(numeroAleatorio);

/* 13- Realiza un script que pida un texto y lo muestre en mayúsculas.

let texto = prompt("Escribe un texto");
let textMayusc = texto.toUpperCase();

console.log(textMayusc);


/* 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”. 


let cadena = prompt(`ingresar una cadena de texto:`);
let salida ="";


for (let i = 0; i < cadena.length; i++) {
    if (i==0) {
        salida = cadena[i];
    } else {
        salida = salida + "-" + cadena[i];
    }
}
console.log(salida);


/* 15- Realiza un script que cuente el número de vocales que tiene un texto. 

pedir que ingrese un texto.
verificar si tiene vocales o no.
si tiene vocales las tenemos que sumar.


let texto = prompt("Ingrese un texto");
let suma = 0;

for(i=0; i<texto.length; i++){
    let vocal = texto.charAt(i);
    if(vocal == "a" || vocal == "e" || vocal == "i" || vocal == "o" || vocal == "u"){
        suma = suma + 1;
    }
}
console.log(suma);

/* 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let cadena = prompt("ingresar una cadena de texto:");
let salida = "";

for (let i = cadena.length - 1 ; i >= 0; i-- ) {
     salida = salida + cadena[i];
    
}
console.log(salida);

/* 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let cadena = prompt("ingresar una cadena de texto:");
let pos = 0;
let vocal = "";
let corte;

for (let i = 0; i < cadena.length; i++) {
    switch (cadena[i]) {
        case "a":
            pos = i;
            vocal = "a";
            corte = true;            
        break;
        case "e":
            pos = i;
            vocal = "e";    
            corte = true;           
        break;
        case "i":
            pos = i;
            vocal = "i";    
            corte = true;           
        break;
         case "o":
             pos = i;
             vocal = "o";    
             corte = true;           
         break;
         case "u":
             pos = i;
             vocal = "u";    
             corte = true;           
         break;
         default:
         break;
     }
     if (corte == true) {
         break;
     }
 }
 console.log(`la vocal '${vocal}' está en la posición ${pos}.`);
 
 */