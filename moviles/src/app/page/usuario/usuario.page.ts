import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonAvatar} from '@ionic/angular/standalone';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonAvatar ]
})
export class UsuarioPage implements OnInit {
  titulo:string = "User title User Info";
  srcImagenUser:string = "";
  nameUser:string = "Bernardo";
  email:string = "bernardo@gmail.com";
  numberPhone: string = "3126409830";

  prueba(){
    return 12;
  }
  constructor() { }

  ngOnInit() {
  }

}
