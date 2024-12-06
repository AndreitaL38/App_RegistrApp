import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
    private userService: UserService) {
    addIcons({ person, lockClosed });

    this.loginForm = this.fb.group({

      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(8),
          Validators.pattern('^[a-zA-Z0-9]*$')
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern('^[0-9]*$')
        ]
      ]
    });

  }

  async onLogin() {
    const username = this.loginForm.get('username')?.value;
    const password: number = this.loginForm.get('password')?.value;

    if (this.loginForm.valid && await this.userService.loginDocente(username, password)) {
      // -----     Navegar a Home y pasamos los parametros
      this.router.navigate(['/docente/home'], { queryParams: { username, password } });
    }

  } // Final onLogin

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
