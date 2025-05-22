const persona = {
    nombre: "ivan isay",
    edad: 37,
    direccion: {
        ciudad: "queretaro",
        pais: "Mexico"
    },
};

// Destructuración
const { nombre, edad } = persona;
console.log("me llamo " + nombre + ",tengo " + edad + " años" + " y vivo en " + persona.direccion.ciudad + ", " + persona.direccion.pais);