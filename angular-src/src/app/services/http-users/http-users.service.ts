import { Injectable } from '@angular/core';
import { user } from './../../interfaces/user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserBid } from 'src/app/interfaces/userBid';

@Injectable({
	providedIn: 'root'
})
export class HttpUsersService {

	constructor(private http: HttpClient) { }

	getClientById(id: String): Observable<user> {
		return this.http.get<user>('http://localhost:3000/user/get/' + id);
	}

	makeBid(us: UserBid): Observable<UserBid> {
		return this.http.post<UserBid>('http://localhost:3000/auction/bid', us);
	}
}
