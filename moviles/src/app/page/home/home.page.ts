import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoUsuarioComponent } from 'src/app/components/info-usuario/info-usuario.component';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton } from '@ionic/angular/standalone';
import { ListaProductosComponentComponent } from 'src/app/components/lista-productos-component/lista-productos-component.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,InfoUsuarioComponent,IonButton,ListaProductosComponentComponent]
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
  ngOnInit() {
  }
confirmarCompra() {
    console.log(`Usuario: ${this.usuario}, Dirección: ${this.direccion}, País: ${this.pais}, Ciudad: ${this.ciudad}, Idioma: ${this.idioma}, Moneda: ${this.moneda}`);
  }

}
