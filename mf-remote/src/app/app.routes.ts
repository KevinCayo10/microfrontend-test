import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'remote',
  //   loadChildren: () => import('./test/test.module').then((m) => m.TestModule),
  // },
  {
    path: 'menu',
    loadChildren: () =>
      import('./menus/menus.module').then((m) => m.MenusModule),
  },
];
