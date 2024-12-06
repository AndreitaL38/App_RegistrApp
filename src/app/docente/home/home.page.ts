import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logOutOutline, qrCodeOutline } from 'ionicons/icons';
import { UserService } from 'src/app/api/user.service';

//import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';




@Component({
  selector: 'app-home:not(p)',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage implements OnInit {

  par_username: string = "";

  constructor(private router: Router, private userService: UserService) {
    addIcons({ qrCodeOutline, logOutOutline });
  }

  ngOnInit() {
    this.par_username = this.userService.getUser();
  }

  generarQR() {
    this.router.navigate(['/asistencia/generar-qr']);
  }

  listarAsistencia() {
    this.router.navigate(['/asistencia/listar']);
  }

  salir() {
    this.router.navigate(['/']);
  }


}
