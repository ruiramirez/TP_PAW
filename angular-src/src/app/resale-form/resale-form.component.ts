import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auction } from '../interfaces/auction';
import { user } from '../interfaces/user'
import { AuctionService } from '../auction.service';
import { AuthService } from "src/app/services/auth.service";

@Component({
	selector: 'app-resale-form',
	templateUrl: './resale-form.component.html',
	styleUrls: ['./resale-form.component.css']
})
export class ResaleFormComponent implements OnInit {

	Title: string;
	Description: string;
	Brand: string;
	Model: string;
	Image: string;
	userValue: number;
	PropValue: number;
	FinalValue: number;
	User: {
		Username: String
	};
	Bids: {


	}




	constructor(private authService: AuthService, private auctionService: AuctionService, private router: Router) { }

	ngOnInit() {

	}

	onSubmit() {
		const auct = {
			Title: this.Title,
			Description: this.Description,
			Brand: this.Brand,
			Model: this.Model,
			Image: this.Image,
			userValue: this.userValue,
			PropValue: this.PropValue,
			FinalValue: this.FinalValue,
			User: this.User.Username,
			Status: "Pending",
			Bids: {
			}


		};
		console.log("aaaaaaaaaaaaaaaa " + auct.Bids);
		this.auctionService.registerAuction(auct).subscribe(data => {

			console.log(data);
		}, err => {
			console.log(err);
			return false;
		});

	}

}



