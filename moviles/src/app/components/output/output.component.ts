import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonButton } from '@ionic/angular/standalone';
import { Producto } from 'src/app/data/interface/producto.model';

@Component({
  selector: 'app-output',
  standalone: true,
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, IonButton],
})
export class OutputComponent implements OnInit {
  @Output() producto = new EventEmitter<Producto>();

  formularioProducto: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formularioProducto = this.fb.group({
      id: [null, [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(1)]],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      price: [0, [Validators.required, Validators.min(1), Validators.max(10000)]],
      description: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1000)]],
      category: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
      image: ['']
    });
  }

  crear() {
    if (this.formularioProducto.valid) {
      const nuevoProducto: Producto = this.formularioProducto.value;
      console.log('Producto creado:', nuevoProducto);
      this.producto.emit(nuevoProducto);
      this.formularioProducto.reset();
    } else {
      console.warn('Formulario inválido, revisa los campos');
      this.formularioProducto.markAllAsTouched(); 0
    }
  }

  
  campoInvalido(campo: string): boolean {
    const control = this.formularioProducto.get(campo);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
