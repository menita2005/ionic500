import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonList, IonAvatar } from '@ionic/angular/standalone';
import { Producto } from 'src/data/interfaces/producto.model';
import { ProductoService } from 'src/data/service/producto-service';

@Component({
  selector: 'app-formulario-producto-output',
  templateUrl: './formulario-producto-output.component.html',
  styleUrls: ['./formulario-producto-output.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonLabel, IonItem, IonList, IonAvatar]
})
export class FormularioProductoOutputComponent implements OnInit {

  productoService = inject(ProductoService)

  @Output() producto = new EventEmitter<Producto>

  logo: string = "https://static.vecteezy.com/system/resources/previews/006/307/399/non_2x/new-product-9-logo-design-template-illustration-suitable-for-product-label-free-vector.jpg";
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
