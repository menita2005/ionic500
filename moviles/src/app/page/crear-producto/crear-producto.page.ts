import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonList, IonAvatar } from '@ionic/angular/standalone';
import { FormularioProductoOutputComponent } from 'src/app/components/formulario-producto-output/formulario-producto-output.component';
import { ListaProductosInputComponent } from 'src/app/components/lista-productos-input/lista-productos-input.component';
import { Producto } from 'src/data/interfaces/producto.model';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/data/service/producto-service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.page.html',
  styleUrls: ['./crear-producto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonLabel, IonItem, IonList, IonAvatar, FormularioProductoOutputComponent, ListaProductosInputComponent]
})
export class CrearProductoPage implements OnInit {

  producto: Producto[] = []

  productoService = inject(ProductoService)

  registrar(producto: Producto){
    alert("Producto creado con exito")
    this.productoService.guardarDato(producto)
  }

  constructor() { }

  ngOnInit() {
  }

}
