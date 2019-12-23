import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from '@views/app-routing.module';
import { HeaderComponentModule } from '@components/header/header.component';
import { FooterComponentModule } from '@components/footer/footer.component';
import { LoadingBlockModule } from '@components/loading-block/loading-block.component';
import { CourseEffects } from '@store/courses/course.effects';
import { reducers, metaReducers } from '@store/reducers';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderComponentModule,
    FooterComponentModule,
    LoadingBlockModule,
    FooterComponentModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production
        })
      : [],
    EffectsModule.forRoot([CourseEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
