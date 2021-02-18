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

    constructor(private http: HttpClient) {
        this.index();
        this.user = new User();
    }

    index() {
        this.read().subscribe((data) => {
            this.users = data;
        })
    }

    headers() {
        return {
            'authorization': AuthService.user?.loginInfo?.token,
            'Content-Type': 'application/json'
        };
    }

    edit(user: IUser | null) {
        this.user = (user) ? user : new User();
    }

    create(user: IUser): Observable<IUser> {
        return this.http.post<IUser>(this.baseUrl, user, { headers: this.headers() });
    }

    read(): Observable<IUser[]> {
        return this.http.get<IUser[]>(this.baseUrl, { headers: this.headers() });
    }

    readById(id: string): Observable<IUser> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<IUser>(url, { headers: this.headers() });
    }

    update(user: IUser): Observable<IUser> {
        const url = `${this.baseUrl}/${user._id}`
        return this.http.put<IUser>(url, user, { headers: this.headers() });
    }

    delete(id: string): Observable<IUser> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<IUser>(url, { headers: this.headers() });
    }

}
