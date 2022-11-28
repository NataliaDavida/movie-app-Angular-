import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionIdInterface, TokenInterface } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public isLogin(): boolean {
    return !!localStorage.getItem('session_id')
  }
  public login(): Observable<TokenInterface> {
    return this.http.get<TokenInterface>(`${environment.BASE_URL}/authentication/token/new?${environment.API_KEY}`);
  }
  public logout(): Observable<{succses: boolean}> {
    return this.http.delete<{succses: boolean}>(`${environment.BASE_URL}/authentication/session?${environment.API_KEY}&session_id=${localStorage.getItem('session_id')}`);
  }
  
  public validate(body: any): Observable<TokenInterface> {
    return this.http.post<TokenInterface>(`${environment.BASE_URL}/authentication/token/validate_with_login?${environment.API_KEY}`, body);
  }
  
  public createSession(body: any): Observable<SessionIdInterface> {
    return this.http.post<SessionIdInterface>(`${environment.BASE_URL}/authentication/session/new?${environment.API_KEY}`, body);
  }
  
}
