import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, IonItem, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonInput, IonLabel, IonItem, IonIcon, RouterModule]
})
export class InfoUsuarioPage implements OnInit {

  public nombre: string = "Angel";
  public apellido: string = "Acuna";
  public ciudad: string = "Barranquilla";
  public fechaNacimiento: string = "23/11/2004";
  public celular: string = "3010200044"
  public correoElectronico: string = "angel@gmail.com"

  private router = inject(Router)

  constructor() { }

  ngOnInit() {
  }

  irAHome(){
    this.router.navigate(['/home']);
  }

  irAHomeParametros(){
    this.router.navigate(['/home', 5]);
  }

  irAHomeQuery(){
    this.router.navigate(['/home'], {
    queryParams: { nombre: 'ANGEL', edad: '25' }
  });
  }

}
