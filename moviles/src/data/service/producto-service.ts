import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listaProducto: Producto[] = []

  obtenerDato(){
    return this.listaProducto
  }

  guardarDato(producto){
    this.listaProducto.push(producto)
  }
}
