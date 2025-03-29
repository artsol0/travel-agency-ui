import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private jwtHelper: JwtHelperService = new JwtHelperService();

  set token(token: string) {
    localStorage.setItem('token', token);
  }

  get token() {
    return localStorage.getItem('token') as string;
  }

  isTokenValid():boolean {
    const token = this.token;

    if (token) {
      const isTokenExpired = this.jwtHelper.isTokenExpired(token);
      if (isTokenExpired) {
        localStorage.clear();
        return false;
      }
      return true;
    }

    return false;
  }

  getUsername() {
    const token = this.token;
    if (token) {
      const claims = this.jwtHelper.decodeToken(token);
      return claims.sub;
    }
    return '';
  }

  getRole(): string {
    const token = this.token;
    if (token) {
      const claims = this.jwtHelper.decodeToken(token);
      const authorities = claims?.authority; 
      return authorities[authorities.length - 1].authority;
    }
    return '';
  }
  
}
