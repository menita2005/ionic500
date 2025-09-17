import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from 'src/data/interfaces/producto.model';

@Component({
  selector: 'app-lista-productos-input',
  templateUrl: './lista-productos-input.component.html',
  styleUrls: ['./lista-productos-input.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ListaProductosInputComponent  implements OnInit {

  @Input() listaProducto: Producto[];

  constructor() { }

  ngOnInit() {}

}
