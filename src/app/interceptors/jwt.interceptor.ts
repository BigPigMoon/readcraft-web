import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const token = this.jwtService.getTokens();

    console.log(request.url);
    if (request.url.endsWith('signin') || request.url.endsWith('signup')) {
      return next.handle(request);
    }

    if (token) {
      const cloned = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      });
      return next.handle(cloned).pipe(
        tap(
          (event) => {
            if (event instanceof HttpResponse) {
              console.log('Server response');
            }
          },
          (err) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                console.log('Unauthorized');
              }
            }
          },
        ),
      );
    } else {
      return next.handle(request);
    }
  }
}
