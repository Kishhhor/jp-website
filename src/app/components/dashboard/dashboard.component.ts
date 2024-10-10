import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {


  //isDashboard: boolean = false;

  constructor(public router: Router) {}


  ngOnInit(): void {

    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     // Check if the current route is the dashboard route
    //     this.isDashboard = event.url.includes('/dashboard');
    //   }
    // });

  }

}





