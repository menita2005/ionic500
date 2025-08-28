import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-usuario',
  standalone: true,
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss'],
  imports: [CommonModule]
})
export class ListaUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  listaObjetos = [
    {
      id: 0,
      title: "MASCOTA",
      price: 2.000,
      description: "NARIZO",
      category: "PERRO",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TNggTjCUytn1yLNknj3ksp6Y_hyFzPtJ-Q&s"
    },
    {
      id: 1,
      title: "Camiseta deportiva",
      price: 15.99,
      description: "Camiseta cómoda y transpirable para deportes.",
      category: "Ropa",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2i0d0iunUzKiCrzDWdt2B4LlVhrOO-UGuQ&s"
    },
    {
      id: 2,
      title: "Auriculares inalámbricos",
      price: 45.5,
      description: "Auriculares Bluetooth con cancelación de ruido.",
      category: "Electrónica",
      image: "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/dog/adult/670e6126a454f140554717.jpg"
    },
    {
      id: 3,
      title: "Libro de cocina",
      price: 12.0,
      description: "Recetas fáciles para principiantes.",
      category: "Libros",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVmMUO8owROeuKfUo8uYVi18taSGkRDc3Qw&s"
    },
    {
      id: 4,
      title: "Silla de oficina",
      price: 89.99,
      description: "Silla ergonómica con soporte lumbar ajustable.",
      category: "Muebles",
      image: "https://www.zooplus.es/magazine/wp-content/uploads/2023/05/Borzoi.webp"
    },
    {
      id: 5,
      title: "Smartwatch",
      price: 120.25,
      description: "Reloj inteligente con monitor de ritmo cardíaco.",
      category: "Electrónica",
      image: ""
    },
    {
      id: 6,
      title: "Zapatillas deportivas",
      price: 65.0,
      description: "Zapatillas cómodas para correr y entrenar.",
      category: "Calzado",
      image: ""
    },
    {
      id: 7,
      title: "Mochila de viaje",
      price: 39.99,
      description: "Mochila resistente al agua con múltiples compartimentos.",
      category: "Accesorios",
      image: ""
    },
    {
      id: 8,
      title: "Lámpara de escritorio",
      price: 22.75,
      description: "Lámpara LED con intensidad regulable.",
      category: "Electrónica",
      image: ""
    },
    {
      id: 9,
      title: "Set de pinceles",
      price: 18.5,
      description: "Juego de pinceles para pintura acrílica y óleo.",
      category: "Arte",
      image: ""
    },
    {
      id: 10,
      title: "Botella térmica",
      price: 14.99,
      description: "Botella para bebidas calientes o frías, 500ml.",
      category: "Accesorios",
      image: ""
    }
  ]

}
