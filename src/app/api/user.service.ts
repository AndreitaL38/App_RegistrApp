import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Docente, Estudiante } from '../interfaces/asistencia';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  async loginDocente(username: String, password: number) {

    const docentes = await this.storageService.get('docentes');
    var x: Docente = docentes.find((obj: { mail: String; password: number; }) => (obj.mail == username && obj.password == password));
    if (x) {
      this._mail = x.mail;
      this._user = x.nombre;
    }
    return x;

  }

  async loginEstudiante(username: String, password: number) {

    const estudiantes = await this.storageService.get('estudiantes');
    var x: Estudiante = estudiantes.find((obj: { mail: String; password: number; }) => (obj.mail == username && obj.password == password));
    if (x) {
      this._mail = x.mail;
      this._user = x.nombre;
    }
    return x;

  }

  private _user!: string;
  private _mail!: string;

  getUser(): string {
    return this._user;
  }

  setUser(user: string) {
    this._user = user;
  }

  getMail(): string {
    return this._mail;
  }

  setMail(mail: string) {
    this._mail = mail;
  }

  constructor(private storageService: StorageService) { }

}
