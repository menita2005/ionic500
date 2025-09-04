import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Producto } from 'src/app/data/interface/producto.model';

@Component({
  selector: 'app-info-usuario',
  standalone:true,
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, InfoUsuarioComponent,IonButton]
})
export class InfoUsuarioComponent  implements OnInit {
  activo: boolean = false;
  listaProductos: string [] = ["Manzana","pera","kiwi","Banano"];
  producto:Producto
  

  constructor() { }

  ngOnInit() {}
  cambiarValor(){
  
    this.activo = !this.activo;
    this.producto; 
    this.activo = !this .activo;
  }

}
