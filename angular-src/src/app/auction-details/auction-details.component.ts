import { Component, OnInit } from '@angular/core';
import { Auction } from '../interfaces/auction';
import { user } from '../interfaces/user';
import { AuctionService } from '../auction.service';
import { ActivatedRoute } from '@angular/router';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-auction-details',
  templateUrl: './auction-details.component.html',
  styleUrls: ['./auction-details.component.css']
})
export class AuctionDetailsComponent implements OnInit {

auction: Auction;
bidUser: user;


tmp = {
	User: user,
	Value: Number
}


  constructor(private auctionService: AuctionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getAuction(this.activatedRoute.snapshot.params.id);
  }

  getAuction(id: string) {
    return this.auctionService.getAuction(id).subscribe(data => {
      this.auction = data;
      console.log(this.auction);
    });
  }



}
