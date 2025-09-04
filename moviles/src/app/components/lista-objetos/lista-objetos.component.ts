import { Component, Input, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-objetos',
  standalone: true,
  templateUrl: './lista-objetos.component.html',
  styleUrls: ['./lista-objetos.component.scss'],
  imports: [IonButton, CommonModule]
})
export class ListaObjetosComponent  implements OnInit {

  //EL HIJO
  //@ ES EL DECLARADOR PARA DECLARAR UNA COMPORTAMIENTO ADICIONAL
  //VARIABLE POR DEFECTO
  @Input() variableEntradaPadre: string;

  constructor() { }

  ngOnInit() {}

}
