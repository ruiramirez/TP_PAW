import { Component, OnInit } from '@angular/core';
import { Auction } from '../interfaces/auction';
import { user } from '../interfaces/user';
import { AuctionService } from '../auction.service';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
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
	maxBid: number;

	constructor(private httpUserService: HttpUsersService, private auctionService: AuctionService, private activatedRoute: ActivatedRoute, private authService: AuthService) { }

	ngOnInit() {
		this.getAuction(this.activatedRoute.snapshot.params.id);
		console.log(this.auction);
		this.getTokenId();
		this.getUser(this.token);
		this.getMaxBid(this.activatedRoute.snapshot.params.id);
	}

	getAuction(id: string) {
		return this.auctionService.getAuction(id).subscribe(data => {

			const act = {
				Title: data.Title,
				Description: data.Description,
				Brand: data.Brand,
				Model: data.Model,
				Image: data.Image,
				userValue: data.userValue,
				PropValue: data.PropValue,
				FinalValue: data.PropValue,
				User: {
					Email: data.User.Email,
					Password: data.User.Password,
					Username: data.User.Username,
					Name: data.User.Name,
					AddressDetail: data.User.AddressDetail,
					City: data.User.City,
					PostalCode: data.User.PostalCode,
					Country: data.User.Country,
					UserType: data.User.UserType,
				},
				Bids: data.Bids,
				Status: data.Status
			};
			this.auction = act;
			console.log(act);
		},
			err => {
				console.log(err);
				return false;
			});
	}

	getTokenId() {
		this.token = localStorage.getItem("user").replace('"id":', '').replace('{', '').replace('}', '').replace('"', '').replace('"', '');
	}

	getUser(id: string) {
		this.httpUserService.getClientById(id).subscribe(data => {
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
		if (vl > query.Auction.FinalValue) {
			this.httpUserService.makeBid(query).subscribe(data => {
				console.log(data);
			});
		} else {

			return false;
		}
		
	}

	isUser() {
		return this.User.UserType === 'User';
	}


	getMaxBid(title: any) {
		this.auctionService.getMaxBid(title).subscribe(data => {
			this.maxBid = data[0].max;
			console.log("em baixossssssss");
			console.log(this.maxBid);
		})
	}
}
