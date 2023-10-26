import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JWToken } from '../models';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor(private jwtHelper: JwtHelperService) {}

  public getTokens(): JWToken | undefined {
    const access = localStorage.getItem('accessToken');
    const refresh = localStorage.getItem('accessToken');

    if (access && refresh) {
      return { accessToken: access, refreshToken: refresh };
    }

    return undefined;
  }

  public setTokens(token: JWToken): void {
    localStorage.setItem('accessToken', token.accessToken);
    localStorage.setItem('refreshToken', token.refreshToken);
  }

  public decodeToken(token: JWToken): any {
    return this.jwtHelper.decodeToken(token.accessToken);
  }

  public isAccessTokenExpired(token: JWToken): boolean {
    return this.jwtHelper.isTokenExpired(token.accessToken);
  }

  public isRefreshTokenExpired(token: JWToken): boolean {
    return this.jwtHelper.isTokenExpired(token.refreshToken);
  }

  public cleanTokens(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}
