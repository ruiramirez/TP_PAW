import { Component, OnInit } from "@angular/core";

import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit() {

  }

  isLoggedIn() {
    return this.authservice.loggedIn();
  }

  onLogoutClick() {
    this.authservice.logout();
    this.router.navigate(["/app-login"]);
  }
}
