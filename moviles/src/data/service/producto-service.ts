import { inject, Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listaProducto: Producto[] = []
  listaProductoCarrito: Producto[] = []
  lista = []

  private http = inject(HttpClient)
  apiUrl = "https://fakestoreapi.com/products"

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

  getAPI(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiUrl)
  }

  postAPI(producto: Producto): Observable<any>{
    return this.http.post<any>(this.apiUrl, producto)
  }
}
