import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';

import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { UserService } from 'src/app/api/user.service';
import { Docente } from '../../interfaces/asistencia';
import { StorageService } from 'src/app/api/storage.service';

describe('Login Docente', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let userService: UserService;
  let storageService: StorageService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
      ],
      providers: [Storage]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userService = new UserService(storageService);
  });

  it('P1 - Verificar la creación del componente', () => {
    expect(component).toBeTruthy();
  });

  it('P2 - Verificar servicio de usuarios', () => {

    expect(userService).toBeTruthy();
  });


});
