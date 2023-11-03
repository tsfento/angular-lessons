import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

export interface AuthResponseData {
  kind?: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiKey: string = '';

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.apiKey, {
      email: email,
      password: password,
      returnSecureToken: true,
    }).pipe(catchError(this.handleError));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.apiKey, {
      email: email,
      password: password,
      returnSecureToken: true,
    }).pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred!'

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => errorMessage);
    }

    console.log(errorRes.error.error.message);
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'E-mail already exists.';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'E-mail or password incorrect.';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'Too many failed login attempts. Please try again later.'
        break;
    }
    return throwError(() => errorMessage);
  }
}