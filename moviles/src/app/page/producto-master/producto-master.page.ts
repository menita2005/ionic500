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
  selector: 'app-producto-master',
  templateUrl: './producto-master.page.html',
  styleUrls: ['./producto-master.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ListaProductosComponentComponent,InfoUsuarioComponent,OutputComponent,IonButton]
})

export class ProductoMasterPage implements OnInit {
  
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
    this.traerProducto();
    
  }
  productosQuemados: Producto[] = [];

  traerProducto(){
    this.productoService.getpost().subscribe({
      next:(data) => {
        this.productosQuemados = data;
        console.log(data)
      },
      error: (err) => {
        console.log("ERROR",err)
      }
      
    })
  }
  agregarAlCarrito(producto: Producto) {
  this.productoService.agregarAlCarrito(producto);
}

}
