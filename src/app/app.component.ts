import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/components/home/home.component";
import { ServiceComponent } from "./components/components/service/service.component";
import { AboutusComponent } from "./components/components/aboutus/aboutus.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ServiceComponent, AboutusComponent, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  toAboutus() {
    document.getElementById("aboutus")?.scrollIntoView({ behavior: 'smooth' });
  }
  
  toService() {
    document.getElementById("service")?.scrollIntoView({ behavior: 'smooth' });
  }
  
  toHome() {
    document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' });
  }
  
  




}
