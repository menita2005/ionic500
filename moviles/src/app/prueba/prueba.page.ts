import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonInput]
})
export class PruebaPage implements OnInit {

  srcImagen1: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGPH9WVz_Essp88UycT0P0gQwhn7j1g2iGw&s";
  activo: boolean = false;
  dato: string;

  constructor() { }

  ngOnInit() {
  }

  prueba(numeroUno: number, numeroDos: number){

    this.srcImagen1 = "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/dog/adult/670e6126a454f140554717.jpg";

    alert("Suma" + numeroUno + numeroDos);

  }

  inactivar(){

    //Para alternar valores entre true y false
    this.activo = !this.activo;

  }

  imprimir(){
    alert(this.dato);
  }

}
