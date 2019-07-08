import { Component, OnInit } from '@angular/core';
import { Auction } from '../interfaces/auction';
import { user } from '../interfaces/user';
import { AuctionService } from '../auction.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpUsersService } from '../services/http-users/http-users.service';

@Component({
	selector: 'app-auction-details',
	templateUrl: './auction-details.component.html',
	styleUrls: ['./auction-details.component.css']
})
export class AuctionDetailsComponent implements OnInit {

	auction: Auction;
	bidUser: user;
	token: any;

	tmp = {
		User: user,
		Value: Number
	}

	constructor(private httpUserService: HttpUsersService, private auctionService: AuctionService, private activatedRoute: ActivatedRoute, private authService: AuthService) { }

	ngOnInit() {
		this.getAuction(this.activatedRoute.snapshot.params.id);
		this.getTokenId();
		this.getUser(this.token);
	}

	getAuction(id: string) {
		return this.auctionService.getAuction(id).subscribe(data => {
			this.auction = data;
			console.log(this.auction);
		});
	}

	getTokenId() {
		this.token = localStorage.getItem("user").replace('"id":', '').replace('{', '').replace('}', '').replace('"', '').replace('"', '');
	}

	getUser(id: string) {
		this.httpUserService.getClientById(id).subscribe(data => {
			this.bidUser = data;
			console.log(this.bidUser);
		})
	}



}
