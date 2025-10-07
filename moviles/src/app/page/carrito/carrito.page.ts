import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Producto } from 'src/data/interfaces/producto.model';
import { ProductoService } from 'src/data/service/producto-service';
import { ListaProductosInputComponent } from 'src/app/components/lista-productos-input/lista-productos-input.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ListaProductosInputComponent]
})
export class CarritoPage implements OnInit {

  listaCarrito: Producto[] = [];

  productoService = inject(ProductoService)

  constructor() { }

  ngOnInit() {
    this.listaCarrito = this.productoService.obtenerProductosCarrito();
  }

}
