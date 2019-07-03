import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Email: string;
  Password: string;
  Username: string;
  Name: string;
  AddressDetail: string;
  City: string;
  PostalCode: string;
  Country: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const user = {
      Email: this.Email,
      Password: this.Password,
      Username: this.Username,
      Name: this.Name,
      AddressDetail: this.AddressDetail,
      City: this.City,
      PostalCode: this.PostalCode,
      Country: this.Country
    };

    console.log(user);
  }

}
