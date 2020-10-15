import { IUser, User } from './../interfaces/User';
import { IProfile } from './../interfaces/Profile';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';

interface IUserDataLogin {
  cpf?: number;
  email?: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static currentProfile: IProfile;
  static user: IUser;

  baseUrl = `${ENV.api.url}/user`;

  private headers = new HttpHeaders({
    //TODO
    // 'Authorization': localStorage.getItem('token'),
    // 'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
    AuthService.init()
  }

  static init() {
    AuthService.user = new User();
    AuthService.currentProfile = AuthService.user.dataAccess.profiles[0];
  }

  login(userDataLogin: IUserDataLogin): void {
    const url = `${this.baseUrl}/login`;
    this.http.post<IUser>(url, userDataLogin, { headers: this.headers }).subscribe((user) => {
      AuthService.user = user;
    });
  }

  logout(id: string): void {
    const url = `${this.baseUrl}/logoff/${id}`;
    this.http.get<IUser>(url, { headers: this.headers }).subscribe(() => {
      AuthService.init();
    });
  }

  logon(userDataLogin: IUserDataLogin): Observable<IUser> {
    return //TODO implement
  }

  logoff(id: string): Observable<IUser> {
    return //TODO implement
  }

  profile(id: string): void {
    const url = `${this.baseUrl}/${id}`;
    this.http.get<IUser>(url).subscribe((user) => {
      AuthService.user = user;
    });
  }

}
