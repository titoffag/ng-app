import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CoursesListPageComponent } from './pages/courses-list-page/courses-list-page.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { PanelComponent } from './components/panel/panel.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HighlightBorderDirective } from './directives/highlight-border.directive';
import { CourseDurationPipe } from './pipes/course-duration.pipe';
import { OrderListByPipe } from './pipes/order-list-by.pipe';
import { SearchByListPipe } from './pipes/search-by-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesListComponent,
    CourseItemComponent,
    CoursesListPageComponent,
    BreadcrumbsComponent,
    PanelComponent,
    UserProfileComponent,
    HighlightBorderDirective,
    CourseDurationPipe,
    OrderListByPipe,
    SearchByListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BreadcrumbModule,
    InputTextModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
