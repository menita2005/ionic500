import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from 'src/app/data/interface/producto.model';
import { ProductoService } from 'src/app/data/service/producto-service';

@Component({
  selector: 'app-lista-carrito-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-carrito-component.component.html',
  styleUrls: ['./lista-carrito-component.component.scss'],
})
export class ListaCarritoComponentComponent implements OnInit {

  carrito: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.cargarCarrito();
  }

  cargarCarrito() {
    this.carrito = this.productoService.obtenerCarrito();
  }

  eliminarDelCarrito(id: number) {
    this.productoService.eliminarDelCarrito(id);
    this.cargarCarrito(); 
  }
}
