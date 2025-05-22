const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 20 }
];
// Usar find para buscar una persona por nombre
const buscarpersona = personas.find((persona) => persona.nombre === "Ana");
console.log(buscarpersona);

//usar forEach para imprimir los nombres de todas las personas junto con su edad
personas.forEach((persona) => {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
});

//usar reduce para sumar las edades de todas las personas
const sumaEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log(`La suma de las edades es: ${sumaEdades}`);
