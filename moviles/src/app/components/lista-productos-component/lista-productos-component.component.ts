import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from 'src/app/data/interface/producto.model';
@Component({
  selector: 'app-lista-productos-component',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './lista-productos-component.component.html',
  styleUrls: ['./lista-productos-component.component.scss'],
})
export class ListaProductosComponentComponent  implements OnInit {
@Input() variableEntradaPadre: Producto[]; 
  constructor() { }
  listaObjetos :Producto[]
  ngOnInit() {}
  cambiarValor(){
      //  this.producto; 
  }
}
