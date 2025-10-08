import { Component, OnInit,inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoUsuarioComponent } from 'src/app/components/info-usuario/info-usuario.component';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton } from '@ionic/angular/standalone';
import { ListaProductosComponentComponent } from 'src/app/components/lista-productos-component/lista-productos-component.component';
import { Producto } from 'src/app/data/interface/producto.model';
import { OutputComponent } from 'src/app/components/output/output.component';
import { ProductoService } from 'src/app/data/service/producto-service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,InfoUsuarioComponent,IonButton,ListaProductosComponentComponent,OutputComponent]
})

export class HomePage implements OnInit {
  
    logo: string = "https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg";
  nombreAplicacion: string = "Company";

  usuario: string;
  direccion: string;
  pais: string;
  ciudad: string;
  idioma: string;
  moneda: string;
  constructor() { }
  variableEnviadaAHijo:string ="soy tu padre";
  variableEntradaPadre:string = "titulo 1";
  variableEnviadaTres:string = " titulo 2 ";
  
  productoService = inject(ProductoService);  // si quieres usar `inject`

  listaObjetos: Producto[] = [];

  ngOnInit() {
    this.listaObjetos = this.productoService.obtenerCreados();
    
  }
  productosQuemados: Producto[] = [
    {
      id: 1,
      title: 'Laptop Lenovo ThinkPad',
      price: 3200,
      description: 'Laptop ideal para trabajo y estudio',
      category: 'Tecnología',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Lenovo_ThinkPad_T14s.jpg'
    },
    {
      id: 2,
      title: 'Teléfono Samsung Galaxy',
      price: 2500,
      description: 'Pantalla AMOLED y cámara profesional',
      category: 'Electrónica',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Samsung_Galaxy_S21_Ultra.png'
    },
    {
      id: 3,
      title: 'Auriculares Sony WH-1000XM5',
      price: 1800,
      description: 'Cancelación de ruido líder en el mercado',
      category: 'Audio',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Sony_WH-1000XM5.jpg'
    }
  ];

 
  agregarAlCarrito(producto: Producto) {
  this.productoService.agregarAlCarrito(producto);
}

}
