import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Animation, AnimationController, IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { person } from 'ionicons/icons';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RecuperarContrasenaPage {

  loginForm!: FormGroup;

  @ViewChild('logoDuoc', { read: ElementRef }) logoDuoc?: ElementRef<HTMLImageElement>;
  @ViewChild('titlePage', { read: ElementRef }) titlePage?: ElementRef<HTMLImageElement>;
  @ViewChild('logoPage', { read: ElementRef }) logoPage?: ElementRef<HTMLImageElement>;

  private logoDuocAnimation!: Animation;
  private titlePageAnimation!: Animation;
  private logoPageAnimation!: Animation;

  constructor(private fb: FormBuilder, private router: Router, private animationCtrl: AnimationController) {
    addIcons({ person });

    this.loginForm = this.fb.group({

      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(8),
          Validators.pattern('^[a-zA-Z0-9]*$')
        ]
      ]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;

      // -----     Navegar a Home y pasamos los parametros
      this.router.navigate(['/']);
    }

  } // Final onLogin

  login() {
    this.router.navigate(['/asistencia/leer-qr']);
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
