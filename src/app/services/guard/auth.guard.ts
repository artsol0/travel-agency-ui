import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../token/token.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const tokenService: TokenService = inject(TokenService);
  const router: Router = inject(Router);

  if (!tokenService.isTokenValid()) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
