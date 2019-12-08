import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '@services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(AuthService.TOKEN_KEY);

    if (token) {
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: token
        }
      });

      return next.handle(clonedRequest);
    } else {
      return next.handle(request);
    }
  }
}
