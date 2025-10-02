import { Injectable } from '@angular/core';
import { Producto } from 'src/app/data/interface/producto.model';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
    listaObjetos: Producto[] = [
    {
      id: 1,
      title: 'Laptop Lenovo',
      price: 2500,
      description: 'Laptop de alto rendimiento para trabajo y estudio',
      category: 'Electrónica',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Lenovo_ThinkPad_T14s.jpg'
    },
    {
      id: 2,
      title: 'Smartphone Samsung',
      price: 1800,
      description: 'Teléfono inteligente con pantalla AMOLED',
      category: 'Electrónica',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Samsung_Galaxy_S21_Ultra.png'
    }
  ];
   
  GuardarDato(producto: Producto) {
    this.listaObjetos.push(producto);
  }

  obtenerProductos(): Producto[] {
    return this.listaObjetos;
  }
}

