# 📦 Sistema de Seguimiento de Pedidos en JavaScript

## 🎯 Objetivo del Proyecto
Este proyecto busca crear un sistema simple de **seguimiento de pedidos en JavaScript**.  
La idea es que una empresa de mensajería pueda:

- 📌 **Registrar pedidos**  
- 🔍 **Buscar pedidos**  
- 📊 **Ordenar pedidos**  
- ❌ **Eliminar pedidos**  

Todo de manera digital, en lugar de hacerlo manualmente.

---

## 🛑 Análisis del Problema
Actualmente, la empresa maneja sus pedidos en **papel**, lo que causa:

- ❌ Errores en el registro.  
- 🕒 Demoras al buscar información.  
- 📂 Dificultad para organizar los pedidos.  

✅ **Solución**: crear un sistema digital en **JavaScript** que maneje los pedidos con estructuras básicas de programación:

- 🔹 **Clases y objetos** para representar clientes, productos y pedidos.  
- 🔹 **Lista enlazada** para almacenar los pedidos dinámicamente.  
- 🔹 **Búsquedas y ordenamientos** para encontrar pedidos rápido.  
- 🔹 **Arreglos binarios (0 y 1)** para representar si el pedido está procesado o no.  

---

## 🛠️ Diseño del Sistema
El sistema se organiza en varios elementos principales:

- 👤 **Clase Cliente** → Guarda los datos básicos del cliente (nombre y dirección).  
- 📦 **Clase Producto** → Representa un producto con nombre y precio.  
- 📝 **Clase Pedido** → Une cliente + producto + fecha + prioridad + estado (procesado o no).  
- 🔗 **Nodo y ListaEnlazada** → Permite registrar, eliminar y recorrer los pedidos.  

### ➕ Funciones Extras:
- 🔍 **Búsqueda lineal** → Para encontrar un pedido por su ID.  
- 📊 **Ordenamiento (Insertion Sort)** → Para ordenar pedidos por fecha o prioridad.  
- 💾 **Arreglos binarios** → Representan estados de los pedidos (`0 = no procesado`, `1 = procesado`).  

---

## 📚 Conceptos Implementados
1. **Clases y Objetos**  
   Se usaron para modelar `Cliente`, `Producto` y `Pedido`, facilitando el trabajo con objetos.  

2. **Lista Enlazada**  
   Permite **agregar y eliminar pedidos dinámicamente** sin depender de un tamaño fijo, a diferencia de un arreglo.  

3. **Búsqueda Lineal**  
   Se recorre la lista paso a paso hasta encontrar el pedido que se busca.  

4. **Ordenamiento (Insertion Sort)**  
   Algoritmo simple para organizar los pedidos por criterio (fecha o prioridad).  

5. **Arreglos Binarios**  
   Se usan `0` y `1` para indicar el estado de cada pedido.  

6. **Ciclos For**  
   Se utilizan para recorrer listas y arreglos, procesando varios pedidos a la vez.  

---

## 🚀 Ejecución del Proyecto
1. Clona este repositorio o copia los archivos.  
2. Asegúrate de tener instalado **Node.js**.  
3. Ejecuta el programa con:  

```bash
node pedidos.js
