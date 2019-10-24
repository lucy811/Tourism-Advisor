import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthData } from './auth.model';
import { environment } from '../../environments/environment'

const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn: "root"})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  createUser(username: string, email: string, password: string) {
    const authData: AuthData = {username: username, email: email, password: password};
    console.log(username + ' ' + email + ' ' + password);
    this.http.post(BACKEND_URL + '/user/signup', authData).subscribe(data => {
      console.log(data);
    })
  }
}