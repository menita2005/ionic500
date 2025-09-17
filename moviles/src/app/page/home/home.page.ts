import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonList, IonAvatar } from '@ionic/angular/standalone';
import { FormularioProductoOutputComponent } from 'src/app/components/formulario-producto-output/formulario-producto-output.component';
import { ListaProductosInputComponent } from 'src/app/components/lista-productos-input/lista-productos-input.component';
import { Producto } from 'src/data/interfaces/producto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonLabel, IonItem, IonList, IonAvatar, FormularioProductoOutputComponent, ListaProductosInputComponent]
})
export class HomePage implements OnInit {

  producto: Producto[] = []

  constructor() { }

  ngOnInit() {
  }

  registrar(producto: Producto){
    alert("Producto creado con exito")
    this.producto.push(producto)
  }

}
