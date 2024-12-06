import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';
import { StorageService } from '../api/storage.service';
import { UserService } from '../api/user.service';
import { Storage } from '@ionic/storage-angular';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let storageService: StorageService;
  let userService: UserService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
      ],
      providers: [Storage]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    storageService = TestBed.inject(StorageService);
    userService = TestBed.inject(UserService);
  });

  it('P1 - Verificar la creación del componente', () => {
    expect(component).toBeTruthy();
  });
});
