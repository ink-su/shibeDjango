import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  loginUser(usename: string, password: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/login')
  }
  
  registerUser(usename: string, password: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/register')
  }
}