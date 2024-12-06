import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    //path: 'home',
    //loadComponent: () => import('./home/home.page').then((m) => m.HomePage),

  path: 'login',
  //loadComponent: () => import('./home/home.page').then((m) => m.HomePage),

   loadComponent: () => import('./login/login.page').then( m => m.LoginPage),

  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    //path: 'login',
    //loadComponent: () => import('./login/login.page').then( m => m.LoginPage)

    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage)


  },
  {
    path: 'docente',
    loadComponent: () => import('./docente/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'docente/home',
    loadComponent: () => import('./docente/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'estudiante',
    loadComponent: () => import('./estudiante/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'estudiante/home',
    loadComponent: () => import('./estudiante/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'asistencia/generar-qr',
    loadComponent: () => import('./asistencia/generar-qr/generar-qr.page').then( m => m.GenerarQrPage)
  },
  {
    path: 'asistencia/proyectar-qr',
    loadComponent: () => import('./asistencia/proyectar-qr/proyectar-qr.page').then( m => m.ProyectarQrPage)
  },
  {
    path: 'asistencia/listar',
    loadComponent: () => import('./asistencia/listar/listar.page').then( m => m.ListarPage)
  },
  {
    path: 'asistencia/leer-qr',
    loadComponent: () => import('./asistencia/leer-qr/leer-qr.page').then( m => m.LeerQrPage)
  },
  {
    path: 'asistencia/registro-exitoso',
    loadComponent: () => import('./asistencia/registro-exitoso/registro-exitoso.page').then( m => m.RegistroExitosoPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/iniciar-registro/iniciar-registro.page').then( m => m.IniciarRegistroPage)
  },
  {
    path: 'recuperar-contrasena',
    loadComponent: () => import('./registro/recuperar-contrasena/recuperar-contrasena.page').then( m => m.RecuperarContrasenaPage)
  },
  {
    path: 'registro-exitoso',
    loadComponent: () => import('./asistencia/registro-exitoso/registro-exitoso.page').then( m => m.RegistroExitosoPage)
  },
];
