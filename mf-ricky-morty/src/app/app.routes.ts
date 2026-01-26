import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'character',
    loadChildren: () =>
      import('./module/character/character.module').then(
        (m) => m.CharacterModule,
      ),
  },
];
