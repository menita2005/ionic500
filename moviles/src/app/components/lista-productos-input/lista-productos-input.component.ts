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
  @Input() pageCarrito: boolean = false;

  productoService = inject(ProductoService)

  agregarAlCarrito(producto: Producto){
    alert("Producto agregado al carrito");
    this.productoService.agregarAlCarrito(producto)
  }

  eliminarDelCarrito(index){
    alert("Producto eliminado del carrito");
    this.productoService.eliminarDelCarrito(index);
  }

  constructor() { }

  ngOnInit() {}

}
