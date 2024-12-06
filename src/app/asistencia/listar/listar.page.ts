import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { arrowBackCircle, home, qrCodeOutline } from 'ionicons/icons';
import { StorageService } from 'src/app/api/storage.service';
import { Asistencia } from 'src/app/interfaces/asistencia';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ListarPage implements OnInit {

  asistencia: Asistencia[] | undefined;

  constructor(private router: Router, private storageService: StorageService) {
    addIcons({ qrCodeOutline, arrowBackCircle, home });
  }

  async ngOnInit() {

    await this.storageService.init();

    this.storageService.get('asistencia').then(as => {
      this.asistencia = as;
    });

  }

  generarQR() {
    this.router.navigate(['/asistencia/proyectar-qr']);
  }

  loginDocente() {
    this.router.navigate(['/docente/home']);
  }

}
