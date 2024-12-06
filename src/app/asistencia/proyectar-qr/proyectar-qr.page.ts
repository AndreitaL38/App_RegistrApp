import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { IonicModule, AnimationController, Animation } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

import { addIcons } from 'ionicons';
import { tv, arrowBackCircle, home } from 'ionicons/icons';

import { QRCodeModule } from 'angularx-qrcode';
import { StorageService } from 'src/app/api/storage.service';
import { Clase } from 'src/app/interfaces/asistencia';

@Component({
  selector: 'app-proyectar-qr',
  templateUrl: './proyectar-qr.page.html',
  styleUrls: ['./proyectar-qr.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, QRCodeModule]
})
export class ProyectarQrPage implements OnInit {

  qrdata: string = "";
  clases!: Clase[];

  constructor(private router: Router, private storageService: StorageService) {
    addIcons({ tv, arrowBackCircle, home });
  }

  async ngOnInit() {

    await this.storageService.init();

    this.storageService.get('clases').then(cs => {
      this.clases = cs;
      this.qrdata = this.clases[0].codigo;
    });

  }

  handleChange(e: { detail: { value: string; }; }) {
    this.qrdata = e.detail.value;
  }

  generarQR() {
    this.router.navigate(['/asistencia/proyectar-qr']);
  }

  loginDocente() {
    this.router.navigate(['/docente/home']);
  }

  back() {
    this.router.navigate(['/asistencia/generar-qr']);
  }

}
