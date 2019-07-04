import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Password: string;
  Username: string;
  constructor() { }

  ngOnInit() {
    
  } onSubmit() {
    const user = {
      Password: this.Password,
      Username: this.Username};

}
}
