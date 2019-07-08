export class UserBid {
	Auction: {
		Title: string;
		Description: string;
		Brand: string;
		Model: string;
		Image: string;
		userValue: number;
		PropValue: number;
		FinalValue: number;
		User:
		{
			Email: string;
			Password: string;
			Username: string;
			Name: string;
			AddressDetail: string;
			City: string;
			PostalCode: string;
			Country: string;
			UserType: string;
		};
		Bids: [{
			User: {
				Email: string;
				Password: string;
				Username: string;
				Name: string;
				AddressDetail: string;
				City: string;
				PostalCode: string;
				Country: string;
			};
			Value: number;
		}]
	};
	User: {
		Email: string;
		Password: string;
		Username: string;
		Name: string;
		AddressDetail: string;
		City: string;
		PostalCode: string;
		Country: string;
		UserType: string;
	};
	Value: number

	constructor(
		Auction: {
			Title: string,
			Description: string,
			Brand: string,
			Model: string,
			Image: string,
			userValue: number,
			PropValue: number,
			FinalValue: number,
			User: {
				Email: string,
				Password: string,
				Username: string,
				Name: string,
				AddressDetail: string,
				City: string,
				PostalCode: string,
				Country: string,
				UserType: string,
			},
			Bids: [{
				User: {
					Email: string,
					Password: string,
					Username: string,
					Name: string,
					AddressDetail: string,
					City: string,
					PostalCode: string,
					Country: string,
				},
				Value: number,
			}
			],
			Status: string
		},
		User: {
			Email: string,
			Password: string,
			Username: string,
			Name: string,
			AddressDetail: string,
			City: string,
			PostalCode: string,
			Country: string,
			UserType: string
		},
		Value: number
	) {
		this.Auction = Auction;
		this.User = User;
		this.Value = Value
	}
} 