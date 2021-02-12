import { AuthService } from './../../auth/auth.service';
import { IProfile } from './../../interfaces/Profile';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IUser, User } from "./../../interfaces/User";
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';

export interface IUserDataLogin {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentProfile: IProfile;
  user: IUser;
  users: IUser[];
  filtro: string;

  baseUrl = `${ENV.api.url}/user`;

  private headers = new HttpHeaders({
    //TODO
    // 'authorization': localStorage.getItem('token'),
    'authorization': AuthService.user?.loginInfo?.token,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
    this.index();
    this.user = new User();
  }

  index() {
    this.read().subscribe((data) => {
      this.users = data;
    })
  }

  login(userDataLogin: IUserDataLogin): Observable<IUser>{
    const url = `${this.baseUrl}/login`;
    return this.http.post<IUser>(url, userDataLogin, { headers: this.headers });
  }

  logout(id: string): Observable<IUser>{
    const url = `${this.baseUrl}/logoff/${id}`;
    return this.http.get<IUser>(url, { headers: this.headers });
  }

  logon(userDataLogin: IUserDataLogin): Observable<IUser>{
    return //TODO implement
  }

  logoff(id: string): Observable<IUser>{
    return //TODO implement
  }

  edit(user: IUser | null){
    this.user = (user) ? user : new User();
  }

  create(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.baseUrl, user);
  }

  read(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrl, { headers: this.headers });
  }

  readById(id: string): Observable<IUser> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IUser>(url);
  }

  update(user: IUser): Observable<IUser> {
    const url = `${this.baseUrl}/${user._id}`
    return this.http.put<IUser>(url, user);
  }

  delete(id: string): Observable<IUser> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<IUser>(url);
  }

}
