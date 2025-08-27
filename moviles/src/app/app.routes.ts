import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'info-usuario',
    loadComponent: () => import('./page/info-usuario/info-usuario.page').then( m => m.InfoUsuarioPage)
  },  {
    path: 'prueba',
    loadComponent: () => import('./prueba/prueba.page').then( m => m.PruebaPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./page/home/home.page').then( m => m.HomePage)
  },


];
