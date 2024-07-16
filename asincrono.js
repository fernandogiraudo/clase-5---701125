console.log("Iniciando tarea");

setTimeout(() => {
    console.log("Ejecutando tarea");
}, 3000);

console.log("Finalizar tarea");

let i= 0;
const intervalo = setInterval(() => {
    i++;
    console.log("Ejecutando intervalo");
    if(i=== 2){
        clearInterval(intervalo);
    }
}, 2000);