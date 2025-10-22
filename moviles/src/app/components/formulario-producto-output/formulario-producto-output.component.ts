import { Component, EventEmitter, Inject, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonList, IonAvatar } from '@ionic/angular/standalone';
import { Producto } from 'src/data/interfaces/producto.model';
import { ProductoService } from 'src/data/service/producto-service';

@Component({
  selector: 'app-formulario-producto-output',
  templateUrl: './formulario-producto-output.component.html',
  styleUrls: ['./formulario-producto-output.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonLabel, IonItem, IonList, IonAvatar, ReactiveFormsModule]
})
export class FormularioProductoOutputComponent implements OnInit {

  productoService = inject(ProductoService)
  private fb = inject(FormBuilder)

  @Output() producto = new EventEmitter<Producto>

  logo: string = "https://static.vecteezy.com/system/resources/previews/006/307/399/non_2x/new-product-9-logo-design-template-illustration-suitable-for-product-label-free-vector.jpg";
  nombreAplicacion: string = "Productos";

  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;

  prod: Producto;

  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      id: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$'), Validators.max(100000000)]],
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(45), Validators.pattern('^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$')]],
      price: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$'), Validators.max(100000000)]],
      description: ['', [Validators.maxLength(300)]],
      category: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(45), Validators.pattern('^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$')]],
      image: ['', [Validators.pattern('https?://.+')]],
    });
  }

  crearNuevoProducto() {

    if (this.formulario.valid) {

      this.prod = this.formulario.value;

      this.producto.emit(this.prod);

    } else {
      alert("Datos incorrectos")
    }


  }

}
