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
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonLabel, IonItem, IonList, IonAvatar, FormularioProductoOutputComponent, ListaProductosInputComponent]
})
export class HomePage implements OnInit {

  producto: Producto[] = []

  private activatedRoute = inject(ActivatedRoute)
  productoService = inject(ProductoService)
  datoObtenido: string = ""

  constructor() { }

  ngOnInit() {
     let id = this.activatedRoute.snapshot.paramMap.get("id")
     console.log(id)
     this.datoObtenido = this.productoService.datoGuardado
  }

  registrar(producto: Producto){
    alert("Producto creado con exito")
    this.producto.push(producto)
  }

}
