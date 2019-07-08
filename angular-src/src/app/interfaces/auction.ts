export class Auction {
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
  }
  ];
  Status: string;

  constructor(
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
  ) {
    this.Title = Title;
    this.Description = Description;
    this.Brand = Brand;
    this.Model = Model;
    this.Image = Image;
    this.userValue = userValue;
    this.PropValue = PropValue;
    this.FinalValue = FinalValue;
    this.User = User;
    this.Bids = Bids;
    this.Status = Status;
  }
}
