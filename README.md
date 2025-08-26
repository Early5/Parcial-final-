# Sistema de Seguimiento de Pedidos en JavaScript

## Objetivo del Proyecto
Este proyecto busca crear un sistema simple de seguimiento de pedidos en **JavaScript**.  
La idea es que una empresa de mensajería pueda **registrar, buscar, ordenar y eliminar pedidos** de manera digital, en lugar de hacerlo manualmente.

## Análisis del Problema
Actualmente la empresa maneja sus pedidos en papel. Eso causa:
- Errores en el registro.
- Demoras al buscar información.
- Dificultad para organizar los pedidos.

Solución: crear un sistema digital en JavaScript que maneje los pedidos con estructuras básicas de programación:
- Clases y objetos para representar clientes, productos y pedidos.
- Una lista enlazada para almacenar los pedidos dinámicamente.
- Búsquedas y ordenamientos para encontrar pedidos rápido.
- Arreglos binarios (0 y 1) para representar si el pedido está procesado o no.

## Diseño del Sistema
El sistema se organiza en varios elementos:
- Clase Cliente → Guarda los datos básicos del cliente (nombre y dirección).
- Clase Producto→ Representa un producto con nombre y precio.
- Clase Pedido→ Une cliente + producto + fecha + prioridad + estado (procesado o no).
- Nodo y ListaEnlazada → La lista enlazada permite registrar, eliminar y recorrer los pedidos.
- Funciones extras:
  - Búsqueda lineal: para encontrar un pedido por su ID.
  - Ordenamiento (Insertion Sort): para ordenar pedidos por fecha o prioridad.
  - Arreglos binarios: representan estados de los pedidos (`0 = no procesado`, `1 = procesado`).

## Conceptos Implementados
1. Clases y Objetos  
   Se usaron clases para modelar Cliente, Producto y Pedido, facilitando el trabajo con objetos.  

2. Lista Enlazada  
   Permite agregar y eliminar pedidos sin depender de un tamaño fijo, a diferencia de un arreglo.  

3. Búsqueda Lineal  
   Se recorre la lista paso a paso hasta encontrar el pedido que se busca.  

4. Ordenamiento (Insertion Sort)  
   Algoritmo simple para organizar los pedidos por criterio (fecha o prioridad).  

5. Arreglos Binarios  
   Se usan `0` y `1` para indicar el estado de cada pedido.  

6. Ciclos For  
   Se utilizan para recorrer listas y arreglos, procesando varios pedidos a la vez.
