import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IUser } from "./../../interfaces/User";
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[];

  baseUrl = `${ENV.api.url}/user`;

  private headers = new HttpHeaders({
    // 'Authorization': localStorage.getItem('token'),
    // 'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
    this.index();
  }

  index() {
    this.read().subscribe((data) => {
      this.users = data;
    })
  }

  // create(user: IUser): void {
  //   this.http.post<IUser>(this.baseUrl, user).subscribe(() => {
  //     this.index();
  //   });
  // }
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
    const url = `${this.baseUrl}/${user.id}`
    return this.http.post<IUser>(url, user);
  }

  // delete(id: string): void {
  //   const url = `${this.baseUrl}/${id}`;
  //   this.http.delete<IUser>(url).subscribe(()=>{
  //     this.index();
  //   });
  // }
  delete(id: string): Observable<IUser> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<IUser>(url);
  }

}
