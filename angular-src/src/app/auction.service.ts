import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auction } from './interfaces/auction';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
Auction:any;

  constructor(private http: HttpClient) { }

  getAuctions(): Observable<Auction[]> {
    return this.http.get<Auction[]>('http://localhost:3000/auction/get');
  }

  getAuction(id: String): Observable<Auction> {
    return this.http.get<Auction>('http://localhost:3000/auction/show/' + id);
  }

  
	registerAuction(auct: Auction) {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json",
				Authorization: "my-auth-token"
			})
		};
		return this.http.post(
			"http://localhost:3000/auction/register",
			auct,
			httpOptions
		);
	}
}
