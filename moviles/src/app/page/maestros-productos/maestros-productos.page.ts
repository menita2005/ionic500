import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Producto } from 'src/data/interfaces/producto.model';
import { ProductoService } from 'src/data/service/producto-service';
import { ListaProductosInputComponent } from 'src/app/components/lista-productos-input/lista-productos-input.component';

@Component({
  selector: 'app-maestros-productos',
  templateUrl: './maestros-productos.page.html',
  styleUrls: ['./maestros-productos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ListaProductosInputComponent]
})
export class MaestrosProductosPage implements OnInit {

  productoService = inject(ProductoService)

  listaSinProductos: Producto[] = [];

  listaConProductos: Producto[] = [
    {
      id: 1,
      title: 'Smartphone X100',
      price: 699.99,
      description: 'Un smartphone de alta gama con pantalla AMOLED de 6.5 pulgadas.',
      category: 'Electronics',
      image: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
    },
    {
      id: 2,
      title: 'Laptop ProBook 15',
      price: 999.99,
      description: 'Laptop profesional con procesador Intel Core i7 y 16 GB de RAM.',
      category: 'Computers',
      image: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
    },
    {
      id: 3,
      title: 'Auriculares Bluetooth ZV',
      price: 129.99,
      description: 'Auriculares inalámbricos con cancelación de ruido y 20 horas de batería.',
      category: 'Accessories',
      image: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
    }
  ];

  constructor() { }

  ngOnInit() {
    this.listaSinProductos = this.productoService.obtenerDato();
  }

}
