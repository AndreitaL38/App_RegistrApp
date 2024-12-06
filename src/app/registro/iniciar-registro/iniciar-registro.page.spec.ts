import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciarRegistroPage } from './iniciar-registro.page';

describe('IniciarRegistroPage', () => {
  let component: IniciarRegistroPage;
  let fixture: ComponentFixture<IniciarRegistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('P1 - Verificar la creación del componente', () => {
    expect(component).toBeTruthy();
  });
});
