import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listaProducto: Producto[] = []
  listaProductoCarrito: Producto[] = []
  lista = []

  obtenerDato(){
    return this.listaProducto
  }

  guardarDato(producto){
    this.listaProducto.push(producto)
  }

  obtenerProductosCarrito(){
    return this.listaProductoCarrito
  }

  agregarAlCarrito(producto){
    
    this.listaProductoCarrito.push(producto)

  }

  eliminarDelCarrito(indexProducto){

    this.listaProductoCarrito.splice(indexProducto, 1);

  }
}
