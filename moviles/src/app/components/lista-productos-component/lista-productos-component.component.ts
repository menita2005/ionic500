import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from 'src/app/data/interface/producto.model';
import { ProductoService } from 'src/app/data/service/producto-service';

@Component({
  selector: 'app-lista-productos-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-productos-component.component.html',
  styleUrls: ['./lista-productos-component.component.scss'],
})
export class ListaProductosComponentComponent implements OnInit {
  @Input() variableEntradaPadre: Producto[];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {}

  agregarAlCarrito(producto: Producto) {
    this.productoService.agregarAlCarrito(producto);
    alert(`"${producto.title}" fue agregado al carrito `);
  }
}

