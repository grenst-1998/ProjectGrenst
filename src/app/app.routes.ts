import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full',
  },
  {
    path: 'principal',
    loadComponent: () => import('./paginas/principal/principal.page').then( m => m.PrincipalPage)
  },
  {
    path: 'vermas',
    loadComponent: () => import('./paginas/vermas/vermas.page').then( m => m.VermasPage)
  },
  {
    path: 'pagina2',
    loadComponent: () => import('./paginas/pagina2/pagina2.page').then( m => m.Pagina2Page)
  },
  {
    path: 'pagina3',
    loadComponent: () => import('./paginas/pagina3/pagina3.page').then( m => m.Pagina3Page)
  },
  {
    path: 'pagina4',
    loadComponent: () => import('./paginas/pagina4/pagina4.page').then( m => m.Pagina4Page)
  },
  {
    path: 'pagina5',
    loadComponent: () => import('./paginas/pagina5/pagina5.page').then( m => m.Pagina5Page)
  },
  {
    path: 'pagina6',
    loadComponent: () => import('./paginas/pagina6/pagina6.page').then( m => m.Pagina6Page)
  },

];
