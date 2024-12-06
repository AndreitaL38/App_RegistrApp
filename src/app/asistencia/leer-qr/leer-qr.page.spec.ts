import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeerQrPage } from './leer-qr.page';
import { StorageService } from 'src/app/api/storage.service';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

describe('LeerQrPage', () => {
  let component: LeerQrPage;
  let fixture: ComponentFixture<LeerQrPage>;

  let storageService : StorageService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
      ],
      providers: [Storage]
    }).compileComponents();

    fixture = TestBed.createComponent(LeerQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    storageService = TestBed.inject(StorageService);
  });

  it('P1 - Verificar la creación del componente', () => {
    expect(component).toBeTruthy();
  });
});
