import { HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../token/token.service';

export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {

  const tokenService = inject(TokenService);
  const token = tokenService.token;

  if (token) {
    const authRequest: HttpRequest<any> = req.clone({
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      }),
    });
    return next(authRequest);
  }

  return next(req);
};
