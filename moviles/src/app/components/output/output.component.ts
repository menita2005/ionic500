import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader,IonTitle,IonToolbar,IonButton,IonLabel,IonItem,IonList,IonAvatar } from '@ionic/angular/standalone';
import { ListaProductosComponentComponent } from '../lista-productos-component/lista-productos-component.component';
import { Producto } from 'src/app/data/interface/producto.model';

@Component({
  selector: 'app-output',
  standalone: true,
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
  imports: [CommonModule, FormsModule,IonContent, IonHeader,IonTitle,IonToolbar,IonButton,IonLabel,IonItem,IonList,IonAvatar,ListaProductosComponentComponent],
})
export class OutputComponent  implements OnInit {

  @Output() producto = new EventEmitter<Producto>
  id:number
  title:String
  price:number
  description:string
  category:string
  image:string

  nuevoProducto: Producto ;

  crear(){
    this.nuevoProducto = {
      id: this.id,
      title: this.title,
      price: this.price,
      description: this.description,
      category: this.category,
      image: this.image
    };  
    this.producto.emit(this.nuevoProducto);
  }
  constructor() { }

  ngOnInit() {}

}
