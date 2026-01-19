import { loadRemoteModule, RemoteConfig} from '@angular-architects/module-federation';

import type { Manifest } from '@angular-architects/module-federation';

export type ResponseI = RemoteConfig & {
  remoteEntry: string;
  exposedModule: string;
  routePath: string;
  ngModuleName: string;
}

export type CustomManifest = Manifest<ResponseI>;


export function buildRoutes(option: CustomManifest){
  const arrayRoutesLazyLoading = Object.keys(option).map((key) => {
    const route = option[key];
    return {
    path: route.routePath,
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: key,
      exposedModule: route.exposedModule
    }).then(m => m[route.ngModuleName])
    }
  })
  return arrayRoutesLazyLoading;
}