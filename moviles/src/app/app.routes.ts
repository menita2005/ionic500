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
    path: 'usuario',
    loadComponent: () => import('./page/usuario/usuario.page').then( m => m.UsuarioPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./page/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'productos',
    loadComponent: () => import('./page/productos/productos.page').then( m => m.ProductosPage)
  },
];
