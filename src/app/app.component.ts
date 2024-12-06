import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StorageService } from './api/storage.service';
import { UserService } from './api/user.service';
import { Asistencia, Clase, Docente, Estudiante } from './interfaces/asistencia';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
  providers: [UserService]
})
export class AppComponent implements OnInit {

  asis!: Asistencia;

  constructor(private storageService: StorageService) {
  }

  async ngOnInit() {
    await this.storageService.init();

    var clases: Clase[] = [
      { codigo: "PGY4121", nombre: "PROGRAMACIÓN DE APLICACIONES MÓVILES" },
      { codigo: "MDY3131", nombre: "Programación de Base de Datos" },
    ];

    var docentes: Docente[] = [
      { mail: "doc1", password: 1234, nombre: "Docente 1" },
      { mail: "doc2", password: 1234, nombre: "Docente 2" },
    ];

    var estudiantes: Estudiante[] = [
      { mail: "est1", password: 1234, nombre: "Estudiante 1" },
      { mail: "est2", password: 1234, nombre: "Estudiante 2" },
      { mail: "est3", password: 1234, nombre: "Estudiante 3" },
      { mail: "est4", password: 1234, nombre: "Estudiante 4" },
    ]

    var asistencia: Asistencia[] = [{
      clase: clases[0],
      docente: docentes[0],
      estudiantes: [
        //{ estudiante: estudiantes[0], fechaIngreso: new Date() },
        //{ estudiante: estudiantes[1], fechaIngreso: new Date() },
      ],
      dia: new Date()
    },
    {
      clase: clases[1],
      docente: docentes[1],
      estudiantes: [
        //{ estudiante: estudiantes[2], fechaIngreso: new Date() },
        //{ estudiante: estudiantes[3], fechaIngreso: new Date() },
      ],
      dia: new Date()
    }]

    this.storageService.set('asistencia', asistencia);
    this.storageService.set("clases", clases);
    this.storageService.set('docentes', docentes);
    this.storageService.set("estudiantes", estudiantes);

  }

}
