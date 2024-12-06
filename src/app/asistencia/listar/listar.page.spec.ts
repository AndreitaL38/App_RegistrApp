import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPage } from './listar.page';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from 'src/app/api/storage.service';
import { IonicModule } from '@ionic/angular';
import { Docente } from '../../interfaces/asistencia';

describe('ListarPage', () => {
  let component: ListarPage;
  let fixture: ComponentFixture<ListarPage>;
  let storageService: StorageService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
      ],
      providers: [Storage]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    storageService = TestBed.inject(StorageService);
  });

  it('P5 - Verificar la creación del componente', () => {
    expect(component).toBeTruthy();
  });

  it('P6 - Cargar datos exitosamente en ngOnInit()', async () => {

    storageService.get('asistencia').then(as => {
      component.asistencia = as;
    });

    expect(component.asistencia == null).toBeTrue();

  });


});
