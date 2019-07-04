import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { user } from "src/app/interfaces/user";
import { LoginUser } from "src/app/interfaces/loginUser";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: any;
  user: any;
  LoginUser: any;

  constructor(private http: HttpClient) {}

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

  storeUserData(token, loginUser){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(loginUser));
    this.authToken = token;
    this.LoginUser = loginUser;

  }
  logout(){
    this.authToken = null;
    this.LoginUser = null;
    localStorage.clear();
  }
}
