import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {


  constructor(private http: HttpClient) { }

  getAuctions(): Observable<Auctions[]> {
    return this.http.get<Auctions[]>('http://localhost:3000/auction/get');
  }
  

}
export interface Auctions {
  Title: String,
  Description: String,
  Brand: String,
  Model: String,
  Image: String,
  userValue: Number,
  PropValue: Number,
  FinalValue: Number,
  User: userSchema,
  Bids: [{
    User: userSchema,
    Value: Number,
  }],
  Status: String,
}

export interface userSchema {

  Email: String,
  Password: String,
  Username: String,
  Name: String,
  AddressDetail: String,
  City: String,
  PostalCode: String,
  Country: String,
  CreditBalance: Number,
  DebitBalance: Number
  UserType: String

}