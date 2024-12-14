import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageService } from 'src/app/api/storage.service';
import { Router } from '@angular/router';
import { Animation, AnimationController, IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { lockClosed, person } from 'ionicons/icons';
import { UserService } from '../../api/user.service';

@Component({
  selector: 'app-login:not(p)',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage {

  loginForm!: FormGroup;

  @ViewChild('logoDuoc', { read: ElementRef }) logoDuoc?: ElementRef<HTMLImageElement>;
  @ViewChild('titlePage', { read: ElementRef }) titlePage?: ElementRef<HTMLImageElement>;
  @ViewChild('logoPage', { read: ElementRef }) logoPage?: ElementRef<HTMLImageElement>;

  private logoDuocAnimation!: Animation;
  private titlePageAnimation!: Animation;
  private logoPageAnimation!: Animation;

  constructor(private fb: FormBuilder,
    private router: Router,
    private animationCtrl: AnimationController,
    private userService: UserService,
    private storageService: StorageService) {
    addIcons({ person, lockClosed });

this.loginForm = this.fb.group({
  username: [
    '',
    [
      Validators.required,
      Validators.email, // Validador para correos electrónicos válidos
    ]
  ],

  password: [
    '',
    [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(6), // Ajusta la longitud si es necesario
      Validators.pattern('^[0-9]*$') // Contraseña solo números (si es tu requisito)
    ]
  ]
});


  }

  async onLogin() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
  
    // Validar que el correo termine en @profesorduoc.cl
    const emailRegex = /^[a-zA-Z0-9._%+-]+@profesorduoc\.cl$/;
  
    if (!emailRegex.test(username)) {
      alert('El correo debe terminar en @profesorduoc.cl.');
      return;
    }
  
    if (this.loginForm.valid) {
      try {
        // Buscar el usuario en el StorageService
        const user = await this.storageService.getUserByEmailAndPassword(username, password);
  
        if (user) {
          // Credenciales válidas, navegar a la página de inicio del docente
          alert('¡Inicio de sesión exitoso!');
          this.router.navigate(['/docente/home'], { queryParams: { username, password } });
        } else {
          // Usuario no encontrado o credenciales incorrectas
          alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert('Ocurrió un error al iniciar sesión.');
      }
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
  
  

  login() {
    this.router.navigate(['/asistencia/generar-qr']);
  }

  recuperaContrasena() {
    this.router.navigate(['/recuperar-contrasena']);
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
