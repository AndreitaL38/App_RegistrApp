import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-iniciar-registro',
  templateUrl: './iniciar-registro.page.html',
  styleUrls: ['./iniciar-registro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class IniciarRegistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
