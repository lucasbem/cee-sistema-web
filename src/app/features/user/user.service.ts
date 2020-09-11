import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IUser } from "./user.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[];

  baseUrl = "http://localhost:3000/user";

  private headers = new HttpHeaders({
    // 'Authorization': localStorage.getItem('token'),
    // 'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {

    this.read().subscribe((data)=>{
      this.users = data;
    })
  }

  create(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.baseUrl, user);
  }

  read(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.baseUrl, { headers: this.headers });
  }

  readById(id: string): Observable<IUser>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IUser>(url);
  }

  update(user: IUser): Observable<IUser>{
    const url = `${this.baseUrl}/${user.id}`
    return this.http.post<IUser>(url, user);
  }

  delete(id: string): Observable<IUser>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<IUser>(url);
  }

}
