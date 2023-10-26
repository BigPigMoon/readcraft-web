import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { JWToken, UserSignIn, UserSignUp } from '../models';
import { environments } from '../environments/environment';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly api_url = environments.apiUrl;

  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
  ) {}

  signIn(user: UserSignIn): Observable<JWToken> {
    return this.http.post<JWToken>(
      `${this.api_url}/api/auth/local/signin`,
      user,
      { withCredentials: true },
    );
  }

  signUp(user: UserSignUp): Observable<JWToken> {
    return this.http.post<JWToken>(
      `${this.api_url}/api/auth/local/signup`,
      user,
      { withCredentials: true },
    );
  }

  logout() {
    const ret = this.http.get(`${this.api_url}/api/auth/logout`).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log(event);
          this.jwtService.cleanTokens();
        }
      }),
    );
    return ret;
  }

  isAuthenticated(): boolean {
    const token = this.jwtService.getTokens();
    return token !== undefined && !this.jwtService.isAccessTokenExpired(token);
  }
}
