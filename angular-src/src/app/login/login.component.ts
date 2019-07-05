import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  Password: string;
  Username: string;
  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit() {}
  onSubmit() {
    const loginUser = {
      Username: this.Username,
      Password: this.Password
    };

    this.authservice.authenticateUser(loginUser).subscribe(data => {

      if (data["success"] === true) {
        this.authservice.storeUserData(data["token"], data["user"]);

        this.router.navigate(["/app-home"]);
        //if tipo user redireciona p "home"....
      }
    });


  }
}

