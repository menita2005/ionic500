import { Injectable } from '@angular/core';
import { Producto } from 'src/app/data/interface/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private listaCreados: Producto[] = [];
  private carrito: Producto[] = [];

  // 🔹 Productos creados
  obtenerCreados() {
    return this.listaCreados;
  }

  guardarProductoNuevo(producto: Producto) {
    this.listaCreados.push(producto);
  }

  // 🔹 Carrito
  obtenerCarrito() {
    return this.carrito;
  }

  agregarAlCarrito(producto: Producto) {
    this.carrito.push(producto);
  }

  eliminarDelCarrito(id: number) {
    this.carrito = this.carrito.filter(p => p.id !== id);
  }
}