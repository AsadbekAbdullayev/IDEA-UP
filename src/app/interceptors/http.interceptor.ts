import {
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { HTTPLoaderService } from '../services/http-loader.service';

export function httpInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const httpLoaderService = inject(HTTPLoaderService);
  httpLoaderService.isLoading.set(true);

  const authToken = localStorage.getItem('access_token') || '';
  const reqWithHeader = req.clone({
    setHeaders: { Authorization: `Bearer ${authToken}` },
  });

  return next(reqWithHeader).pipe(
    catchError((error) => {
      // bu yerda xatolikni qaytaramiz
      return throwError(() => error);
    }),
    finalize(() => {
      // response bo‘lsa ham, error bo‘lsa ham isLoading = false bo‘ladi
      httpLoaderService.isLoading.set(false);
    })
  );
}
