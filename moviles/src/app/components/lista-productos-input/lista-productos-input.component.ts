import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from 'src/data/interfaces/producto.model';
import { ProductoService } from 'src/data/service/producto-service';

@Component({
  selector: 'app-lista-productos-input',
  templateUrl: './lista-productos-input.component.html',
  styleUrls: ['./lista-productos-input.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ListaProductosInputComponent  implements OnInit {

  @Input() listaProducto: Producto[];
  productoService = inject(ProductoService)

  agregarAlCarrito(producto: Producto){
    alert("Producto agregado al carrito");
    producto.carrito = true;
    this.productoService.agregarAlCarrito(producto)
  }

  eliminarDelCarrito(producto: Producto){
    alert("Producto agregado al carrito");
    this.productoService.eliminarDelCarrito(producto)
  }

  constructor() { }

  ngOnInit() {}

}
