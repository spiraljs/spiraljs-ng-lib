import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OrbitSolve Library - Angular';
  navbarOpen = false;
  @ViewChild('navBarButton', {read: ElementRef}) private navBarButton: ElementRef; 
  @ViewChild('navMenu') private navMenu: ElementRef; 

  constructor(private router: Router){}
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  closeNavbar(){
    this.navbarOpen = false;
  }

  gotoHome() {
    // const navButton = this.navBarButton.nativeElement as HTMLElement;
    // console.log(navButton.getAttribute('style'));
    console.log(this.navBarButton.nativeElement.getAttribute('style'));

    // const navMen = this.navMenu.nativeElement as HTMLDivElement;
    // console.log(navMen);

    this.router.navigate(["/"]);
    this.closeNavbar();
  }

  gotoAuthCustom(){
    this.router.navigate(["/auth/custom"]);
    this.closeNavbar();
  }

  gotoAuthCognito() {
    this.router.navigate(["/auth/cognito"]);
    this.closeNavbar();
  }

}
