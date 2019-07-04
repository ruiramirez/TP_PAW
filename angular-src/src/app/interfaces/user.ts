// tslint:disable-next-line: class-name
export class user {
  Email: string;
  Password: string;
  Username: string;
  Name: string;
  AddressDetail: string;
  City: string;
  PostalCode: string;
  Country: string;
  UserType: string;

  constructor(
    Email: string,
    Password: string,
    Username: string,
    Name: string,
    AddressDetail: string,
    City: string,
    PostalCode: string,
    Country: string,
    UserType: string
  ) {
    this.Email = Email;
    this.Password = Password;
    this.Username = Username;
    this.Name = Name;
    this.AddressDetail = AddressDetail;
    this.City = City;
    this.PostalCode = PostalCode;
    this.Country = Country;
    this.UserType = UserType;
  }
}
