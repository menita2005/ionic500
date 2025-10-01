import { Injectable } from '@angular/core';
import { Producto } from 'src/app/data/interface/producto.model';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  datoGuardado:string = ""
  listaObjetos :Producto[] = []
   
  GuardarDato(producto){
    this.listaObjetos.push(producto);
  }
}
