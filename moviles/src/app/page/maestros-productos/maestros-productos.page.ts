import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ListaUsuarioComponent } from 'src/app/components/lista-usuario/lista-usuario.component';

@Component({
  selector: 'app-maestros-productos',
  templateUrl: './maestros-productos.page.html',
  styleUrls: ['./maestros-productos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ListaUsuarioComponent]
})
export class MaestrosProductosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
