import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpiralDate } from 'spiraljs-ng-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  spiralDate: SpiralDate;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoAuthCognitoHome() {
    console.log("going to auth-cognito");
    this.router.navigate(["/auth/cognito"]);
  }

  createDate(){
    this.spiralDate = new SpiralDate();
  }

  moveDateToPreviousDay(){
    this.spiralDate = this.spiralDate.moveToPreviousDate();
  }

  moveDateToNextDay(){
    this.spiralDate = this.spiralDate.moveToNextDate();
  }
}
