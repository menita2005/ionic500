import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/data/interface/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private listaCreados: Producto[] = [];
  private carrito: Producto[] = [];
  private http = inject(HttpClient)
  apiUrl = "https://fakestoreapi.com/products"
  
  getpost(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiUrl);
  }
  crearpost(post:Producto):Observable<any>{
    return this.http.post<Producto[]>(this.apiUrl, post);
  }
  //Productos creados
  obtenerCreados() {
    return this.listaCreados;
  }

  guardarProductoNuevo(producto: Producto) {
    this.listaCreados.push(producto);
  }

  //Carrito
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