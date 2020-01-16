import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  TranslateCacheModule,
  TranslateCacheSettings,
  TranslateCacheService
} from 'ngx-translate-cache';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

import { AppRoutingModule } from '@views/app-routing.module';
import { HeaderComponentModule } from '@components/header/header.component';
import { FooterComponentModule } from '@components/footer/footer.component';
import { LoadingBlockModule } from '@components/loading-block/loading-block.component';

import { AppComponent } from './app.component';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function translateCacheFactory(
  translateService: TranslateService,
  translateCacheSettings: TranslateCacheSettings
) {
  return new TranslateCacheService(translateService, translateCacheSettings);
}

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: translateCacheFactory,
        deps: [TranslateService, TranslateCacheSettings]
      },
      cacheMechanism: 'Cookie'
    })
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useFactory: (translateService: TranslateService) =>
        translateService.currentLang,
      deps: [TranslateService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    translate: TranslateService,
    translateCacheService: TranslateCacheService
  ) {
    registerLocaleData(localePl, 'pl');

    translateCacheService.init();
    translate.addLangs(['en', 'pl']);

    const browserLang =
      translateCacheService.getCachedLanguage() || translate.getBrowserLang();
    translate.use(browserLang.match(/en|pl/) ? browserLang : 'en');
  }
}
