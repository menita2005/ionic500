import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ListaProductosComponentComponent } from 'src/app/components/lista-productos-component/lista-productos-component.component';
import { Producto } from 'src/app/data/interface/producto.model';
import { OutputComponent } from 'src/app/components/output/output.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ListaProductosComponentComponent,OutputComponent]
})
export class ProductosPage implements OnInit {

  constructor() { }
Producto :Producto[] = []
  ngOnInit() {
  }
  GuardarProducto(producto){
    this.Producto.push(producto);
  }

}
