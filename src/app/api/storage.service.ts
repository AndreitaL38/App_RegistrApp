import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { Asistencia, Clase, Docente, Estudiante } from '../interfaces/asistencia';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  public async get(key: string) {
    return await this._storage?.get(key);
  }

  public async getDocentes() {
    return this._storage?.get('docentes');
  }

  public async getDocente() {
    this.getDocentes().then(docentes => {
      var result: Docente = docentes.find((o: Docente) => o.mail == 'doc1');
      console.log(result);
      return result;
    });

  }

  async enumerate() {
    this._storage?.forEach((value, key, index) => {
      var message = `ITEM - ${key} = ${value} [${index}]`
      console.log(message);
    });
  }

  public async saveUser(user: any) {
    const users = (await this.get('users')) || []; // Obtener usuarios previos o inicializar como arreglo vacío
    users.push(user); // Agregar el nuevo usuario al arreglo
    await this.set('users', users); // Guardar el arreglo actualizado
    console.log('Usuario guardado:', user);
  }
  
  public async getUserByEmailAndPassword(email: string, password: string): Promise<any> {
    const users = (await this.get('users')) || []; // Obtener todos los usuarios registrados
    return users.find((user: any) => user.email === email && user.password === password);
  }
  


}
