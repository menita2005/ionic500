import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class InfoUsuarioPage implements OnInit {

  titulo: string = "CARLITOS";
  public mostrarTexto: boolean;
  srcImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkDQ0jxlWcR0fsaeIb0ovOZ6WLAbZ48a--oQ&s";

  constructor() { }

  ngOnInit() {
  }

  public setOpenButton: boolean;

  abrirTexto() {
    this.mostrarTexto = true;
  }

  cerrarTexto() {
    this.mostrarTexto = false;
  }

  prueba() {
    return 20;
  }

}
