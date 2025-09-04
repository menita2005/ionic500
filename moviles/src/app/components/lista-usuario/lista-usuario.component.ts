import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from 'src/data/interfaces/producto.model';

@Component({
  selector: 'app-lista-usuario',
  standalone: true,
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss'],
  imports: [CommonModule]
})
export class ListaUsuarioComponent implements OnInit {

  //EL HIJO
  //@ ES EL DECLARADOR PARA DECLARAR UNA COMPORTAMIENTO ADICIONAL
  //VARIABLE POR DEFECTO
  @Input() listaObjetosPadre: Producto[];

  constructor() { }

  ngOnInit() { }

}
