import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InfoUsuarioPage implements OnInit {

  public nombre: string = "Angel";
  public apellido: string = "Acuna";
  public ciudad: string = "Barranquilla";
  public fechaNacimiento: string = "23/11/2004";
  public celular: string = "3010200044"
  public correoElectronico: string = "angel@gmail.com"

  constructor() { }

  ngOnInit() {
  }

}
