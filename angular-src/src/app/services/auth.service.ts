import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { user } from "src/app/interfaces/user";
import { LoginUser } from "src/app/interfaces/loginUser";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: any;
  user: any;
  LoginUser: any;

  constructor(private http: HttpClient) { }

  registerUser(user: user) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token"
      })
    };
    return this.http.post(
      "http://localhost:3000/user/register",
      user,
      httpOptions
    );
  }

  authenticateUser(LoginUser: LoginUser) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token"
      })
    };
    return this.http.post(
      "http://localhost:3000/user/authenticate",
      LoginUser,
      httpOptions
    );
  }

  storeUserData(token, loginUser) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(loginUser));
    this.authToken = token;
    this.LoginUser = loginUser;
  }

  loadToken() {
    const token = localStorage.getItem("id_token");
    this.authToken = token;
  }

  loggedIn() {
    const helper = new JwtHelperService();

    const current = new Date();
    const expirationDate = helper.getTokenExpirationDate(this.authToken);

    return current > expirationDate;
}

  logout() {
    this.loggedIn();
    this.authToken = null;
    this.LoginUser = null;
    localStorage.clear();

  }
}
