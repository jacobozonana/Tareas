//1. Escribe un programa que muestre los números del 1 al 50, con las siguientes excepciones:
//Para los múltiplos de 3 muestra la palabra "Fizz" en lugar del número.

//Para los múltiplos de 5 muestra la palabra "Buzz" en lugar del número.

//Para los múltiplos de 3 y 5 muestra la palabra "FizzBuzz" en lugar del número.

//2. Imprime por consola la lista de números del 1 al 30, incrementándose de 3 en 3.

//3. Escribe un programa que indique si un número es par o impar.

//1. Solucion
//  for(var i = 1 ; i <= 50 ;  i++ ){
// 	if (i % 3 == 0 && i % 5 == 0){
// 	console.log("FizzBuzz")
// 	}
// 	else if (i % 3 == 0){
// 	console.log("Fizz")
// 	}
// 	else if (i % 5 == 0){
// 	console.log("Buzz")
// 	}
// 	else
// 	console.log(i)
// } 

// 2. Solucion
// for (var i = 1; i <= 30; i+=3){
// 	console.log(i)
// //}

// 3. Solucion
// var numero = prompt ("Cual es tu numero")
// if (numero % 2 == 0){
// console.log("Tu numero es par")
// alert("Tu numero es par")
// }
// else{
// console.log
// ("Tu numero es impar")
// alert("Tu numero es impar")
// }

//3.1 Solucion.
// for (i=1; i<=50; i++){
// if (i % 2==0){
//     console.log(i + " Es par")
// }
//     else {
//     console.log(i + " Es impar")
// }
// }