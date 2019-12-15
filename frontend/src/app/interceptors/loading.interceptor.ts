import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoadingBlockService } from '@services/loading-block.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  activeRequests = 0;

  constructor(private loadingBlockService: LoadingBlockService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.activeRequests === 0) {
      this.loadingBlockService.startLoading();
    }

    this.activeRequests += 1;

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests -= 1;
        if (this.activeRequests === 0) {
          this.loadingBlockService.stopLoading();
        }
      })
    );
  }
}
