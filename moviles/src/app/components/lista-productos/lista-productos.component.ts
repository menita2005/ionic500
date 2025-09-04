import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss'],
  imports: [IonButton, CommonModule]
})
export class ListaProductosComponent implements OnInit {

  activo: boolean = false;
  listaProductos: String[] = ["Jabon", "Mueble", "Historico"];

  //10 OBJETOS Y QUE TENGA IMAGEN

  listaObjetos = [
    {
      nombre: "Juana",
      edad: 25
    },
    {
      nombre: "Paula",
      edad: 21
    },
    {
      nombre: "Mena",
      edad: 20
    }
  ]

  constructor() { }

  ngOnInit() { }

  cambiarValor() {
    
    //let productoNuevo: Producto = new Producto(2, "Play5", 6000);
    //this.producto = new Producto(1, "Carlitos", 12000);

    /*
    this.producto = {
      id: 1,
      nombre: "Camisa",
      precio: 19000
    }
      */

    this.activo = !this.activo;

  }

}
