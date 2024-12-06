import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logOutOutline, qrCodeOutline } from 'ionicons/icons';
import { UserService } from 'src/app/api/user.service';

//import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage implements OnInit {

  private userService = inject(UserService);

  par_username: string = "";

  constructor(private router: Router) {
    addIcons({ qrCodeOutline, logOutOutline });
  }

  ngOnInit() {

    // Recepcion de parametros
    this.par_username = this.userService.getUser();
  }

  generarQR() {
    this.router.navigate(['/asistencia/leer-qr']);
  }

  salir() {
    this.router.navigate(['/']);
  }


}
