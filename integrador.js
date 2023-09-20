alert("Bienvenidos al restaurant Fridays")
entrada=parseInt(prompt("Ingrese el valor de la entrada"))
segundo=parseInt(prompt("Ingrese el valor del segundo"))
postre=parseInt(prompt("Ingrese el valor del postre"))
presupuesto=parseInt(prompt("Ingrese el valor de su presupuesto"))
var suma=entrada+segundo+postre;
var IGV=suma*18/100;
var vuelto=presupuesto-(IGV+suma);
console.log("El valor de la entrada es:",entrada)
console.log("El valor del segundo es:",segundo)
console.log("El valor del postre es:",postre)
console.log("El costo total es de: ", suma);
console.log("El costo total con IGV es de: ",IGV+suma)
console.log("Su vuelto seria: ",vuelto)
