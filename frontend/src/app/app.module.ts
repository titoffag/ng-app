import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@views/app-routing.module';
import { HeaderComponentModule } from '@components/header/header.component';
import { FooterComponentModule } from '@components/footer/footer.component';
import { LoadingBlockModule } from '@components/loading-block/loading-block.component';

import { AppComponent } from './app.component';
import { I18nModule } from './i18n.module';

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
    I18nModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
