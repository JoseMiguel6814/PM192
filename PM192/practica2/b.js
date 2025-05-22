const productos = [
    { nombre: "laptop", precio: 1000, },
    { nombre: "monitor", precio: 3000, },
    { nombre: "teclado", precio: 750, },
    { nombre: "mouse", precio: 250, }
];
// filtrar productos mayores a 1000
const productosFiltrados = productos.filter((producto) => producto.precio >= 1000);

// usar map para obtener un nuevo array con los nombres de los productos filtrados
const nombresProductosFiltrados = productosFiltrados.map((producto) => producto.nombre);
console.log(nombresProductosFiltrados);