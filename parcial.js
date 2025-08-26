// Clase Producto: representa un producto dentro de un pedido 
class Producto { 
    constructor(nombre, precio) { 
        this.nombre = nombre;   // Nombre del producto 
        this.precio = precio;   // Precio del producto 
    } 
} 

// Clase Cliente: representa a un cliente que hace pedidos 
class Cliente { 
    constructor(nombre, direccion) { 
        this.nombre = nombre;       // Nombre del cliente 
        this.direccion = direccion; // Dirección del cliente 
    } 
} 

// Clase Pedido: une cliente + productos + estado 
class Pedido { 
    constructor(id, cliente, productos, prioridad, fecha) { 
        this.id = id;                   // Identificador único del pedido 
        this.cliente = cliente;         // Objeto cliente 
        this.productos = productos;     // Lista de productos 
        this.prioridad = prioridad;     // Prioridad del pedido (número) 
        this.fecha = fecha;             // Fecha del pedido (string) 
        this.estadoBinario = 0;         // Estado en binario: 0 = no 
                                        // procesado, 1 = procesado 
    } 

    // Calcular el precio total sumando los productos 
    calcularTotal() { 
        let total = 0; 
        for (let i = 0; i < this.productos.length; i++) { // Uso de ciclo for 
            total += this.productos[i].precio; 
        } 
        return total; 
    } 
} 

// Nodo de la Lista Enlazada 
class Nodo { 
    constructor(pedido) { 
        this.pedido = pedido; // El valor del nodo será un pedido 
        this.siguiente = null; // Apunta al siguiente nodo 
    } 
} 

// Lista Enlazada para manejar pedidos 
class ListaEnlazada { 
    constructor() { 
        this.cabeza = null; // Inicio de la lista enlazada 
    } 

    // Registrar un nuevo pedido (insertar al final de la lista) 
    agregarPedido(pedido) { 
        let nuevoNodo = new Nodo(pedido); // Crear nodo nuevo 
        if (this.cabeza === null) { // Si la lista está vacía 
            this.cabeza = nuevoNodo; // Ese pedido será la cabeza 
        } else { 
            let actual = this.cabeza; // Empezamos desde la cabeza 
            while (actual.siguiente !== null) { // Recorremos hasta el final 
                actual = actual.siguiente; 
            } 
            actual.siguiente = nuevoNodo; // Insertamos al final 
        } 
    } 

    // Buscar un pedido por ID (búsqueda lineal) 
    buscarPedidoPorId(id) { 
        let actual = this.cabeza; 
        while (actual !== null) { // Recorremos toda la lista 
            if (actual.pedido.id === id) { // Si encontramos el ID 
                return actual.pedido; 
            } 
            actual = actual.siguiente; 
        } 
        return null; // No encontrado 
    } 

    // Eliminar un pedido por ID 
    eliminarPedido(id) { 
        if (this.cabeza === null) return; // Si está vacía, no hay nada 

        // Si el que queremos eliminar es la cabeza 
        if (this.cabeza.pedido.id === id) { 
            this.cabeza = this.cabeza.siguiente; // Saltamos al siguiente 
            return; 
        } 

        // Recorremos la lista buscando el pedido 
        let actual = this.cabeza; 
        while (actual.siguiente !== null) { 
            if (actual.siguiente.pedido.id === id) { 
                actual.siguiente = actual.siguiente.siguiente; // "saltamos" el nodo 
                return; 
            } 
            actual = actual.siguiente; 
        } 
    } 

    // Ordenar pedidos por prioridad usando Bubble Sort 
    ordenarPorPrioridad() { 
        if (this.cabeza === null) return; // Si la lista está vacía 
        let cambiado; 
        do { 
            cambiado = false; 
            let actual = this.cabeza; 
            while (actual.siguiente !== null) { 
                if (actual.pedido.prioridad > actual.siguiente.pedido.prioridad) { 
                    // Intercambiamos pedidos si están en mal orden 
                    let temp = actual.pedido; 
                    actual.pedido = actual.siguiente.pedido; 
                    actual.siguiente.pedido = temp; 
                    cambiado = true; 
                } 
                actual = actual.siguiente; 
            } 
        } while (cambiado); // Repetimos hasta que esté ordenado 
    } 

    // Mostrar todos los pedidos 
    mostrarPedidos() { 
        let actual = this.cabeza; 
        while (actual !== null) { 
            console.log("ID:", actual.pedido.id, 
                        "Cliente:", actual.pedido.cliente.nombre, 
                        "Total:", actual.pedido.calcularTotal(), 
                        "Prioridad:", actual.pedido.prioridad, 
                        "Estado:", actual.pedido.estadoBinario === 1 ? 
                                  "Procesado" : "No procesado"); 
            actual = actual.siguiente; 
        } 
    } 
} 

// Ejemplo de uso del sistema 

// Crear algunos clientes 
let cliente1 = new Cliente("Carlos", "Calle 123"); 
let cliente2 = new Cliente("Ana", "Avenida 45"); 

// Crear productos 
let prod1 = new Producto("Laptop", 3000); 
let prod2 = new Producto("Mouse", 100); 
let prod3 = new Producto("Teclado", 200); 

// Crear pedidos 
let pedido1 = new Pedido(1, cliente1, [prod1, prod2], 2, "2025-08-25"); 
let pedido2 = new Pedido(2, cliente2, [prod3], 1, "2025-08-26"); 

// Crear la lista enlazada 
let listaPedidos = new ListaEnlazada(); 

// Agregar pedidos a la lista 
listaPedidos.agregarPedido(pedido1); 
listaPedidos.agregarPedido(pedido2); 

console.log("----- Pedidos registrados -----"); 
listaPedidos.mostrarPedidos(); 

// Buscar un pedido por ID 
console.log("----- Buscar pedido con ID 1 -----"); 
let encontrado = listaPedidos.buscarPedidoPorId(1); 
if (encontrado !== null) { 
    console.log("Pedido encontrado del cliente:", 
    encontrado.cliente.nombre); 
} else { 
    console.log("Pedido no encontrado"); 
} 

// Ordenar por prioridad 
console.log("----- Pedidos ordenados por prioridad -----"); 
listaPedidos.ordenarPorPrioridad(); 
listaPedidos.mostrarPedidos(); 

// Eliminar un pedido 
console.log("----- Eliminar pedido con ID 1 -----"); 
listaPedidos.eliminarPedido(1); 
listaPedidos.mostrarPedidos(); 

// Cambiar estado binario (ejemplo de uso de arreglo binario) 
console.log("----- Cambiar estado del pedido 2 a procesado -----"); 
let pedidoProcesar = listaPedidos.buscarPedidoPorId(2); 
if (pedidoProcesar !== null) { 
    pedidoProcesar.estadoBinario = 1; // Marcamos como procesado 
} 
listaPedidos.mostrarPedidos(); 