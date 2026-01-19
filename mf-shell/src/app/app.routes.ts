import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {
  getManifest,
  loadRemoteModule,
} from '@angular-architects/module-federation';
import { buildRoutes, CustomManifest } from './utils/config-routes';

const manifest = getManifest<CustomManifest>();

console.log({ manifest });

const routesParsed = buildRoutes(manifest);

console.log({ routesParsed });

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  ...routesParsed,
];

/**
 * Ejemplo HOST
 * {
    path: 'remote',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './TestModule',
      }).then((m) => m.TestModule),
  },
 */

/* ANTES
{
    path: 'remote',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'remote',
      exposedModule: './TestModule'
    }).then(m => m.TestModule)
  }
*/
