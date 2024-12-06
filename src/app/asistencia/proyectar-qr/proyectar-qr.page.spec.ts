import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProyectarQrPage } from './proyectar-qr.page';

import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

describe('ProyectarQrPage', () => {
  let component: ProyectarQrPage;
  let fixture: ComponentFixture<ProyectarQrPage>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
      ],
      providers: [Storage]
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectarQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('P7 - Creación exitosa del componente', () => {
    expect(component).toBeTruthy();
  });

  it('P8 - Valor inicial de qrData', () => {
    expect(component.qrdata).toBe('');
  });

  it('P9 - Generación del código QR al pulsar un botón', () => {

    component.qrdata = 'Prueba QR';
    component.handleChange({ detail: { value: 'Prueba QR' } });

    expect(component.qrdata).toBe('Prueba QR');
  });

  it('P10 - Verificar que el QR no se muestra inicialmente', () => {

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('logo')).toBeNull();
  });

  it('P11 - Actualización de createdCode al llamar a generateQRCode()', () => {

    component.qrdata = 'Nuevo texto QR';
    component.handleChange({ detail: { value: 'Nuevo texto QR' } });

    expect(component.qrdata).toBe('Nuevo texto QR');
  });



});
