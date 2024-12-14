import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,Animation, AnimationController } from '@ionic/angular';
import { StorageService } from 'src/app/api/storage.service'; // Importar StorageService

@Component({
  selector: 'app-iniciar-registro',
  templateUrl: './iniciar-registro.page.html',
  styleUrls: ['./iniciar-registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IniciarRegistroPage implements OnInit {
    @ViewChild('logoDuoc', { read: ElementRef }) logoDuoc?: ElementRef<HTMLImageElement>;
    @ViewChild('titlePage', { read: ElementRef }) titlePage?: ElementRef<HTMLImageElement>;
    @ViewChild('logoPage', { read: ElementRef }) logoPage?: ElementRef<HTMLImageElement>;
  
    private logoDuocAnimation!: Animation;
    private titlePageAnimation!: Animation;
    private logoPageAnimation!: Animation;
  email: string = '';
  password: string = '';

  constructor(private storageService: StorageService,private animationCtrl: AnimationController) {}

  ngOnInit() {}

  async onSubmit() {
    if (!this.email || !this.password) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    // Validar el formato del correo
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(profesorduoc\.cl|duocuc\.cl)$/;
  
    if (!emailRegex.test(this.email)) {
      alert('El correo debe terminar en @profesorduoc.cl o @duocuc.cl.');
      return;
    }
  
    // Validar la contraseña (máximo 6 números)
    const passwordRegex = /^[0-9]{1,6}$/;
  
    if (!passwordRegex.test(this.password)) {
      alert('La contraseña debe contener solo números y un máximo de 6 caracteres.');
      return;
    }
  
    // Crear objeto de usuario
    const newUser = {
      email: this.email,
      password: this.password,
    };
  
    try {
      // Guardar usuario en el storage usando la función saveUser
      await this.storageService.saveUser(newUser);
      alert('¡Usuario registrado correctamente!');
  
      // Limpiar campos del formulario
      this.email = '';
      this.password = '';
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
    }
  }
  
  

  async checkUsers() {
    const users = await this.storageService.get('users');
    console.log('Usuarios guardados:', users);
  }

  ngAfterViewInit() {
    if (this.logoDuoc?.nativeElement && this.titlePage?.nativeElement && this.logoPage?.nativeElement) {
      this.logoDuocAnimation = this.animationCtrl.create()
        .addElement(this.logoDuoc.nativeElement)
        .duration(1500)
        .fromTo('transform', 'translateY(-100px)', 'translateY(0)');

      this.titlePageAnimation = this.animationCtrl.create()
        .addElement(this.titlePage.nativeElement)
        .duration(1000)
        .fromTo('transform', 'translateY(-100px)', 'translateY(0)');

      this.logoPageAnimation = this.animationCtrl.create()
        .addElement(this.logoPage.nativeElement)
        .duration(500)
        .fromTo('transform', 'translateY(-100px)', 'translateY(0)');

      this.logoDuocAnimation.play()
      this.titlePageAnimation.play()
      this.logoPageAnimation.play()

    } // final If
    else {
      console.error('Los elementos no fueron encontrados')
    }


  } // final After



}
