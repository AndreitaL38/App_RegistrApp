export interface Asistencia {

  clase: Clase;
  docente: Docente;
  estudiantes: { estudiante: Estudiante, fechaIngreso: Date }[];
  dia: Date;

}

export interface Clase {
  codigo: string;
  nombre: string;
}

export interface Docente {
  mail: string;
  password: number;
  nombre: string;
}

export interface Estudiante {
  mail: string;
  password: number;
  nombre: string;
}
