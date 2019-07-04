import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resale-form',
  templateUrl: './resale-form.component.html',
  styleUrls: ['./resale-form.component.css']
})
export class ResaleFormComponent implements OnInit {

  Title:string;
  Value: Number;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    const auctions={
      Title:this.Title,
      value:this.Value
    }
  }

}
