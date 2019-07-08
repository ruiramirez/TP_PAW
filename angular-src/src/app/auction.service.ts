import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auction } from './interfaces/auction';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {


  constructor(private http: HttpClient) { }

  getAuctions(): Observable<Auction[]> {
    return this.http.get<Auction[]>('http://localhost:3000/auction/get');
  }

  getAuction(id: String): Observable<Auction> {
    return this.http.get<Auction>('http://localhost:3000/auction/show/' + id);
  }

}
