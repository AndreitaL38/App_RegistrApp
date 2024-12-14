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
    Html5Qrcode.getCameras()
      .then(devices => {
        if (devices && devices.length > 0) {
          const cameraId = devices[0].id; // Toma la primera cámara disponible
          this.escanear(cameraId);
        } else {
          alert('No se encontraron cámaras disponibles.');
        }
      })
      .catch(err => {
        console.error('Error al obtener cámaras:', err);
        alert('No se pudo acceder a la cámara. Verifica los permisos.');
      });
  }
  

  escanear(cameraId: string) {
    const html5QrCode = new Html5Qrcode('reader'); // El contenedor debe existir
  
    html5QrCode
      .start(
        cameraId,
        {
          fps: 10, // Velocidad de escaneo (frames per second)
          qrbox: { width: 250, height: 250 } // Cuadro delimitador del escaneo
        },
        (decodedText, decodedResult) => {
          console.log('Código QR detectado:', decodedText);
          this.scannedText = decodedText;
  
          // Parar la cámara después de escanear
          html5QrCode.stop()
            .then(() => {
              console.log('Escaneo detenido.');
              this.procesarQR(decodedText);
            })
            .catch(err => console.error('Error al detener el escaneo:', err));
        },
        (errorMessage) => {
          console.warn('Error al escanear QR:', errorMessage);
        }
      )
      .catch(err => {
        console.error('Error al iniciar la cámara:', err);
        alert('No se pudo iniciar la cámara. Verifica los permisos.');
      });
  }

  procesarQR(decodedText: string) {
    this.storageService.get('asistencia').then(async (asistencia: Asistencia[]) => {
      const index = asistencia.findIndex(o => o.clase.codigo === decodedText);
  
      if (index >= 0) {
        const estudiantes = await this.storageService.get('estudiantes');
        const est: Estudiante = estudiantes.find((obj: { mail: string }) => obj.mail === this.userService.getMail());
  
        if (est) {
          asistencia[index].estudiantes.push({ estudiante: est, fechaIngreso: new Date() });
          await this.storageService.set('asistencia', asistencia);
          this.registroExitoso();
        } else {
          alert('Estudiante no encontrado en el registro.');
        }
      } else {
        alert('El código QR no corresponde a ninguna clase.');
      }
    });
  }
  
  

}
