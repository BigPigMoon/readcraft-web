import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserSignIn, JWToken, UserSignUp } from "../models";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(user: UserSignIn): Observable<JWToken> {
    return this.http.post<JWToken>("/api/auth/local/sign-in", user);
  }

  signUp(user: UserSignUp) {}
}
