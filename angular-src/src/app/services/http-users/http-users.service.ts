import { Injectable } from '@angular/core';
import { user } from './../../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpUsersService {

  constructor(private http: HttpClient) { }

  getClientByUsername(): Observable<user> {
	  return this.http.get<user>('http://localhost:3000/user/get');
  }
}
