import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../auction.service';
import { Router } from '@angular/router';
import { Auction } from '../interfaces/auction';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {
  auctions = new Array<Auction>();
  auction: Auction;

  constructor(private auctionService: AuctionService, private router: Router) { }

  ngOnInit() {
    this.auctionService.getAuctions().subscribe(data => {
      this.auctions = data;
      console.log(this.auctions);
    },
    err => {
      console.log(err);
      return false;
    });
  }
}
