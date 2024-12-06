import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { arrowBackCircle, camera, home } from 'ionicons/icons';

import { Html5Qrcode } from "html5-qrcode";
import { StorageService } from 'src/app/api/storage.service';
import { Asistencia, Estudiante } from 'src/app/interfaces/asistencia';
import { UserService } from 'src/app/api/user.service';


@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.page.html',
  styleUrls: ['./leer-qr.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LeerQrPage implements OnInit {

  scannedText: String = "";

  constructor(private router: Router, private storageService: StorageService, private userService: UserService) {
    addIcons({ camera, arrowBackCircle, home });
  }

  async ngOnInit() {
    await this.storageService.init();
  }

  generarQR() {
    this.router.navigate(['/asistencia/proyectar-qr']);
  }

  loginEstudiante() {
    this.router.navigate(['/estudiante/home']);
  }

  back() {
    this.router.navigate(['/estudiante/home']);
  }

  registroExitoso() {
    this.router.navigate(['/asistencia/registro-exitoso']);
  }

  ingresarCamara() {

    Html5Qrcode.getCameras().then(devices => {
      if (devices && devices.length) {
        var cameraId = devices[0].id;
        this.escanear(cameraId);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  escanear(cameraId: string) {

    const html5QrCode = new Html5Qrcode(/* element id */ "reader", false);
    html5QrCode.start(
      cameraId,
      {
        fps: 10,    // Optional, frame per seconds for qr code scanning
        qrbox: { width: 250, height: 250 }  // Optional, if you want bounded box UI
      },
      async (decodedText, decodedResult) => {


        this.storageService.get('asistencia').then(async (asistencia: Asistencia[]) => {

          var x = asistencia.findIndex(o => (o.clase.codigo == decodedText));
          console.log(x);

          if (x >= 0) {
            var estudiantes = await this.storageService.get('estudiantes');
            var est: Estudiante = estudiantes.find((obj: { mail: String; }) => (obj.mail == this.userService.getMail()));

            asistencia[x].estudiantes.push({ estudiante: est, fechaIngreso: new Date() })
            this.storageService.set('asistencia', asistencia);
          }
        });

        this.registroExitoso();

        this.scannedText = decodedText;

        html5QrCode.stop().then((ignore) => {
          console.log("QR Code scanning is stopped.");
        }).catch((err) => {
          console.error(err);
        });
      },
      (errorMessage) => {
        // parse error, ignore it.
      })
      .catch((err) => {
        console.error(err);
      });
  }

}
