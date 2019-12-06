import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './views/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentModule } from './components/header/header.component';
import { FooterComponentModule } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderComponentModule,
    FooterComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
