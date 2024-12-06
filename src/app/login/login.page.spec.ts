import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { StorageService } from '../api/storage.service';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  let storageService : StorageService;

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
    storageService = TestBed.inject(StorageService);
  });

  it('P1 - Verificar la creación del componente', () => {
    expect(component).toBeTruthy();
  });
});
