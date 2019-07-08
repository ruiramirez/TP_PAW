import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router';
import { Auction} from '../interfaces/auction';


@Component({
  selector: 'app-resale-form',
  templateUrl: './resale-form.component.html',
  styleUrls: ['./resale-form.component.css']
})
export class ResaleFormComponent implements OnInit {
	auctions =new Array<Auction>();
	auction:Auction;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
  
  }

}
