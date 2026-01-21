import { Component, EventEmitter, Output } from '@angular/core';
import { getManifest } from '@angular-architects/module-federation';

import type { CustomManifest } from '../../../utils/config-routes';

type SidebarItem = {
  key: string;
  label: string;
  routePath: string;
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Output() navigate = new EventEmitter<void>();

  readonly items: SidebarItem[];

  constructor() {
    const manifest = getManifest<CustomManifest>() ?? ({} as CustomManifest);

    const dynamicItems: SidebarItem[] = Object.entries(manifest)
      .map(([key, value]) => {
        const anyValue = value as any;
        const routePath = String(anyValue?.routePath ?? '').trim();
        const label = String(anyValue?.displayName ?? key).trim();

        return {
          key,
          label: label || key,
          routePath,
        };
      })
      .filter((item) => item.routePath.length > 0);

    this.items = [
      { key: 'home', label: 'Inicio', routePath: '' },
      ...dynamicItems,
    ];
  }

  trackByKey(_: number, item: SidebarItem): string {
    return item.key;
  }
}
