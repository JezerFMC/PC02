import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EstudiantesService } from '../estudiantes';

@Component({
  selector: 'app-lista',
  imports: [RouterLink],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {
  private servicio = inject(EstudiantesService);
  estudiantes = signal<any[]>([]);

  constructor() {
    this.servicio.obtener().subscribe(datos => this.estudiantes.set(datos));
  }
}