import { Component, OnInit } from '@angular/core';
import {AuctionService,Auctions,userSchema} from '../auction.service'

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-auctions-state',
  templateUrl: './auctions-state.component.html',
  styleUrls: ['./auctions-state.component.css']
})
export class AuctionsStateComponent implements OnInit {


  public auctions: Auctions[];
  constructor(private auctionService: AuctionService, private modalService: NgbModal) { }

  ngOnInit() {
    this.auctionService.getAuctions().subscribe(data => { this.auctions = data });
    console.log(this.auctions);
  }

}
