import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class CrumbsService {
  createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: MenuItem[] = []
  ): MenuItem[] | void {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url
        .map(segment => segment.path)
        .join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data[0]
        ? child.snapshot.data[0]
        : child.snapshot.data.label;
      const isModuleRootComponent = child.snapshot.data.isModuleRootComponent;
      if (label !== undefined && label !== null && !isModuleRootComponent) {
        breadcrumbs.push({ label, url });
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
