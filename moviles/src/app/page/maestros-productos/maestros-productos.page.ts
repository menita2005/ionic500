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

  listaVacia: Producto[] = [];

  listaProductos: Producto[] = [
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
    },
    {
      id: 4,
      title: 'Cámara Digital DSLR',
      price: 549.99,
      description: 'Cámara profesional DSLR con lente de 18-55 mm, ideal para fotografía.',
      category: 'Electronics',
      image: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
    },
    {
      id: 5,
      title: 'Smartwatch 3000',
      price: 249.99,
      description: 'Reloj inteligente con monitor de frecuencia cardíaca y GPS.',
      category: 'Accessories',
      image: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
    },
    {
      id: 6,
      title: 'Micrófono Condensador',
      price: 89.99,
      description: 'Micrófono de alta calidad para grabación profesional y streaming.',
      category: 'Electronics',
      image: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
    },
    {
      id: 7,
      title: 'Teclado Mecánico RGB',
      price: 69.99,
      description: 'Teclado mecánico con retroiluminación RGB y switches de alta respuesta.',
      category: 'Computers',
      image: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
    },
    {
      id: 8,
      title: 'Monitor UltraWide 34"',
      price: 379.99,
      description: 'Pantalla curva UltraWide 34 pulgadas para multitareas y gaming.',
      category: 'Computers',
      image: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
    },
    {
      id: 9,
      title: 'Parlantes Bluetooth',
      price: 79.99,
      description: 'Parlantes inalámbricos con sonido estéreo y 12 horas de duración.',
      category: 'Accessories',
      image: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
    },
    {
      id: 10,
      title: 'Pantalla LED 55"',
      price: 499.99,
      description: 'Televisor LED de 55 pulgadas con resolución 4K y sonido envolvente.',
      category: 'Electronics',
      image: 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg',
    }
  ];

  constructor() { }

  ngOnInit() {
      this.listaVacia = this.productoService.obtenerDato();
      this.productoService.guardarDato(this.listaProductos)
  }

}
