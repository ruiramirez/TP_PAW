import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../auction.service';
import { Router } from '@angular/router';
import { Auction } from '../interfaces/auction';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-auctions-state',
  templateUrl: './auctions-state.component.html',
  styleUrls: ['./auctions-state.component.css']
})
export class AuctionsStateComponent implements OnInit {

  auctions = new Array<Auction>();

  constructor(private auctionService: AuctionService, private routerService: Router) { }

  ngOnInit() {
    this.auctionService.getAuctions().subscribe(data => {
      this.auctions = data;
      console.log(this.auctions);
    });

  }

}
