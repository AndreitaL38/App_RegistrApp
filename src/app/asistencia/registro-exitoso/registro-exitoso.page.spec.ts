import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroExitosoPage } from './registro-exitoso.page';

describe('RegistroExitosoPage', () => {
  let component: RegistroExitosoPage;
  let fixture: ComponentFixture<RegistroExitosoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroExitosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('P1 - Verificar la creación del componente', () => {
    expect(component).toBeTruthy();
  });
});
