import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private client: AuthHandClient;
  // constructor() {
  //   this.client = new AuthHandClient('http://0.0.0.0:5000', {});
  // }
  // register(request: RegisterRequest): Promise<TokensResponse | null> {
  //   return new Promise((resolve, reject) => {
  //     this.client.register(request, (err, response: TokensResponse | null) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(response);
  //       }
  //     });
  //   });
  // }
  // login(request: LoginRequest): Promise<TokensResponse | null> {
  //   return new Promise((resolve, reject) => {
  //     this.client.login(request, (err, response: TokensResponse | null) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(response);
  //       }
  //     });
  //   });
  // }
}
