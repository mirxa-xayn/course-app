import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`[HTTP] ${req.method} request start`);
  return next(req).pipe(
    catchError((err: ErrorEvent) => {
      return throwError(() => 'request Error' + err);
    })
  );
};
