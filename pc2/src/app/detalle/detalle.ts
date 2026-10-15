import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EstudiantesService } from '../estudiantes';

@Component({
  selector: 'app-detalle',
  imports: [RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle {
  private ruta = inject(ActivatedRoute);
  private servicio = inject(EstudiantesService);
  est = signal<any>(null);

  constructor() {
    const id = Number(this.ruta.snapshot.paramMap.get('id'));

    this.servicio.obtener().subscribe(lista => {
      const e = lista.find(x => x.id === id);
      if (!e) return;

      const suma = e.nota1 + e.nota2 + e.nota3;
      const promedio = suma / 3;
      const estado = promedio >= 13 ? 'Aprobado' : 'Desaprobado';
      let observacion = 'En riesgo';
      if (promedio >= 17) observacion = 'Excelente';
      else if (promedio >= 13) observacion = 'Regular';

      this.est.set({ nombre: e.nombre, suma, promedio: promedio.toFixed(2), estado, observacion });
    });
  }
}