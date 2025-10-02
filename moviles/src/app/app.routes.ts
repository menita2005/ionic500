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
    path: 'home',
    loadComponent: () => import('./page/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'home/:id',
    loadComponent: () => import('./page/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'maestros-productos',
    loadComponent: () => import('./page/maestros-productos/maestros-productos.page').then( m => m.MaestrosProductosPage)
  },




];
