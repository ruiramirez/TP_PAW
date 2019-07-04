import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
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
  UserType: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    const user = {
      Email: this.Email,
      Password: this.Password,
      Username: this.Username,
      Name: this.Name,
      AddressDetail: this.AddressDetail,
      City: this.City,
      PostalCode: this.PostalCode,
      Country: this.Country,
      UserType: "User"
    };

    console.log(user);

    this.authService.registerUser(user).subscribe(data => {
      console.log(data);
      console.log("it works");
      this.router.navigate(["/app-login"]);
    });
  }
}
