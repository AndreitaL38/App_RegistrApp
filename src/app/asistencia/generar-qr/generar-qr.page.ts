import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { IonicModule, AnimationController, Animation } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

import { addIcons } from 'ionicons';
import { qrCodeOutline, arrowBackCircle, home } from 'ionicons/icons';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class GenerarQrPage implements OnInit {

  constructor(private router: Router) {
    addIcons({ qrCodeOutline, arrowBackCircle, home });
  }

  ngOnInit() {
  }

  generarQR() {
    this.router.navigate(['/asistencia/proyectar-qr']);
  }

  loginDocente() {
    this.router.navigate(['/docente/home']);
  }

}
