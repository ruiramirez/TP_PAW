import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
    return this.authToken = token;
  }

  loggedIn() {

    if (!localStorage.getItem("id_token")) {
      return false;
    }

    const helper = new JwtHelperService();

    const current = new Date();

    const expirationDate = helper.getTokenExpirationDate(this.loadToken());

    return current.getTime() < expirationDate.getTime();
  }

  logout() {
    this.authToken = null;
    this.LoginUser = null;
    localStorage.clear();
  }
}
