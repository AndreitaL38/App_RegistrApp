import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { IonicModule, AnimationController, Animation } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

import { addIcons } from 'ionicons';
import { camera, arrowBackCircle, home } from 'ionicons/icons';

import { Html5QrcodeScanner } from "html5-qrcode";
import { Html5Qrcode } from "html5-qrcode";

@Component({
  selector: 'app-registro-exitoso',
  templateUrl: './registro-exitoso.page.html',
  styleUrls: ['./registro-exitoso.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RegistroExitosoPage implements OnInit {

  constructor(private router: Router) {
    addIcons({ camera, arrowBackCircle, home });
  }

  ngOnInit() {
  }

  loginEstudiante() {
    this.router.navigate(['/estudiante/home']);
  }

  back() {
    this.router.navigate(['/estudiante/home']);
  }

}
