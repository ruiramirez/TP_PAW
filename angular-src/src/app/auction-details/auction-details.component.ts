import { Component, OnInit } from '@angular/core';
import { Auction } from '../interfaces/auction';
import { user } from '../interfaces/user';
import { AuctionService } from '../auction.service';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpUsersService } from '../services/http-users/http-users.service';

@Component({
	selector: 'app-auction-details',
	templateUrl: './auction-details.component.html',
	styleUrls: ['./auction-details.component.css']
})
export class AuctionDetailsComponent implements OnInit {

	auction: Auction;
	User: user;
	token: any;
	Value: number;


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
			console.log("em baixo");
			console.log(data);
			const user = {
				Email: data.Email,
				Password: data.Password,
				Username: data.Username,
				Name: data.Name,
				AddressDetail: data.AddressDetail,
				City: data.City,
				PostalCode: data.PostalCode,
				Country: data.Country,
				UserType: data.UserType
			};
			this.User = user;

		},
			err => {
				console.log(err);
				return false;
			});
	}

	onClickSubmit() {

		const vl = this.Value;
		const query = {
			Auction: this.auction,
			User: this.User,
			Value: vl
		}

		if (vl > query.Auction.Bids[0].Value) {
			this.httpUserService.makeBid(query).subscribe(data => {
				console.log(data);
			});
		} else {

			return false;
		}

	}

}
