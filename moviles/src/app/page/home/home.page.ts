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

  constructor() { }

  logo: string = "https://img.freepik.com/vector-premium/diseno-logotipo-vectorial-iconos-entrega-concepto-creativo-unico-premium-vector_561067-1562.jpg?semt=ais_hybrid&w=740&q=80";
  nombreAplicacion: string = "Delivery Express";

  usuario: string;
  direccion: string;
  pais: string;
  ciudad: string;
  idioma: string;
  moneda: string;

  ngOnInit() {
  }

  confirmarCompra() {
    console.log(`Usuario: ${this.usuario}, Dirección: ${this.direccion}, País: ${this.pais}, Ciudad: ${this.ciudad}, Idioma: ${this.idioma}, Moneda: ${this.moneda}`);
  }

}
