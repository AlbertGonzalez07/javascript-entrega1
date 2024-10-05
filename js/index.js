


// en esta entrega realizo una simulacion de calculo de un prestamo personal, que me genere un 30% de interes sobre el valor de la cuota cada mes. 

//primero verificamos que la persona a ingresar sea mayor de edad 

// luego accedemos al simulador de con clave 

// luego podemos simular el prestamo donde tendremos el importe generado por la cantidad de cuotas a pagar y el importe final 
//con los intereses generados.


let edad = 18;

let mayorEdad = true;
 
edad = parseInt(prompt("ingrese edad"));

if ( edad >= 18 && mayorEdad === true){ 
    console.log(" puedes acceder al prestamo")

}
else{
   console.log("no eres mayor de edad")
}





let clave;

let intentos = 0;
let MAX_INTENTOS = 3;

do{
    clave = prompt('ingrese la contraseña');
    intentos ++;

     if(clave === '1234'){
        console.log("contraseña correcta")
        break;
     }

     if(intentos >= MAX_INTENTOS){
        console.log("cantidad intentos alcanzado")
        break;
     }

}while (true);
    





let prestamo = 0;
let cantidadCuota = 0;
let cuotas = 0;



prestamo = parseInt(prompt("Ingrese monto del prestamo: "));
 console.log (prestamo);
 

cantidadCuota = parseInt(prompt("Ingrese candidad de cuotas: "));
console.log (cantidadCuota + " cantidad de cuotas ");
 

cuotas = (prestamo / cantidadCuota) ;
console.log (cuotas + " valor de la cuota ");


valorInteres = (cuotas) * 0.3;
console.log ( valorInteres  +  " intereses de la cuota " );


for (let i = 1; i <=cantidadCuota; i++){

    let resultado = valorInteres * i;
    console.log ( valorInteres + " + " + i + " cuota = "  + resultado);
}


valorCuotaInteres = (valorInteres * cantidadCuota);
console.log (valorCuotaInteres + " intereses generado ");

importePrestamoCuota = (prestamo + valorCuotaInteres);
console.log (" devolucion total prestamo y intereses es de $ " + importePrestamoCuota);





 