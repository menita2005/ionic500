import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ListaCarritoComponentComponent } from 'src/app/components/lista-carrito-component/lista-carrito-component.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ListaCarritoComponentComponent]
})
export class CarritoPage implements OnInit {
  constructor() {}
  ngOnInit() {}
}
