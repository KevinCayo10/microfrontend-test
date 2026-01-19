import { loadManifest } from '@angular-architects/module-federation';

loadManifest('http://localhost:3001/manifest')
  .catch((err: any) => console.error(err))
  .then((_: any) => import('./bootstrap'))
  .catch((err: any) => console.error(err));
