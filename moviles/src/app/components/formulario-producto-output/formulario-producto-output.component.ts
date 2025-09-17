import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonList, IonAvatar } from '@ionic/angular/standalone';
import { Producto } from 'src/data/interfaces/producto.model';

@Component({
  selector: 'app-formulario-producto-output',
  templateUrl: './formulario-producto-output.component.html',
  styleUrls: ['./formulario-producto-output.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonLabel, IonItem, IonList, IonAvatar]
})
export class FormularioProductoOutputComponent implements OnInit {

  @Output() producto = new EventEmitter<Producto>

  logo: string = "https://img.freepik.com/vector-premium/diseno-logotipo-vectorial-iconos-entrega-concepto-creativo-unico-premium-vector_561067-1562.jpg?semt=ais_hybrid&w=740&q=80";
  nombreAplicacion: string = "Productos";

  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;

  prod: Producto;

  constructor() { }

  ngOnInit() {}

  crearNuevoProducto() {

    this.prod = {
      id: this.id,
      title: this.title,
      price: this.price,
      description: this.description,
      category: this.category,
      image: this.image,
    };

    this.producto.emit(this.prod);
  }

}
