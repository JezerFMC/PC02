import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class EstudiantesService {
  private http = inject(HttpClient);
  private url = 'https://careli2021.github.io/api_examen/api/estudiante.json';

  obtener() {
    return this.http.get<any[]>(this.url);
  }
}