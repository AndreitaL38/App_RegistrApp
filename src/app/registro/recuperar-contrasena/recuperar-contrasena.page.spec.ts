import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarContrasenaPage } from './recuperar-contrasena.page';

describe('RecuperarContrasenaPage', () => {
  let component: RecuperarContrasenaPage;
  let fixture: ComponentFixture<RecuperarContrasenaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarContrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('P1 - Verificar la creación del componente', () => {
    expect(component).toBeTruthy();
  });
});
