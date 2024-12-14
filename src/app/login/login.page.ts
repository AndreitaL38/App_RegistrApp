import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { Animation, AnimationController, IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { bookOutline, laptopOutline, shieldCheckmarkOutline } from 'ionicons/icons';
import { Asistencia } from '../interfaces/asistencia';
import { StorageService } from '../api/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage {

  private storage = inject(StorageService);

  asistencia: Asistencia | undefined;


  @ViewChild('logoDuoc', { read: ElementRef }) logoDuoc?: ElementRef<HTMLImageElement>;
  @ViewChild('logoPage', { read: ElementRef }) logoPage?: ElementRef<HTMLImageElement>;

  private logoDuocAnimation!: Animation;
  private logoPageAnimation!: Animation;

  constructor(private fb: FormBuilder, private router: Router, private animationCtrl: AnimationController) {

    addIcons({ laptopOutline, bookOutline, shieldCheckmarkOutline });


    this.storage.get('asistencia').then(as => {
      this.asistencia = as;
    });


  }// Fin constructor




  ngAfterViewInit() {
    if (this.logoDuoc?.nativeElement && this.logoPage?.nativeElement) {
      this.logoDuocAnimation = this.animationCtrl.create()
        .addElement(this.logoDuoc.nativeElement)
        .duration(1500)
        .fromTo('transform', 'translateY(-100px)', 'translateY(0)');

      this.logoPageAnimation = this.animationCtrl.create()
        .addElement(this.logoPage.nativeElement)
        .duration(500)
        .fromTo('transform', 'translateY(-100px)', 'translateY(0)');

      this.logoDuocAnimation.play()
      this.logoPageAnimation.play()

    } // final If
    else {
      console.error('Los elementos no fueron encontrados')
    }


  } // final After


  loginDocente() {
    this.router.navigate(['/docente']);
  }

  loginEstudiante() {
    this.router.navigate(['/estudiante']);
  }

  //Metodo envio al registro de usuario
  registrarse(){
    this.router.navigate(['/registro']);
  }


} // Final
