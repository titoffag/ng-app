import { Component, Input, NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input() items: MenuItem[] | null | void;
}

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [BreadcrumbModule],
  exports: [BreadcrumbsComponent]
})
export class BreadcrumbsComponentModule {}
