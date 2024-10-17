import { Component } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/components/home/home.component";
import { ServiceComponent } from "./components/components/service/service.component";
import { AboutusComponent } from "./components/components/aboutus/aboutus.component";
import { CommonModule } from '@angular/common';
import emailjs  from '@emailjs/browser'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CareerComponent } from './components/components/career/career.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ServiceComponent,CareerComponent, AboutusComponent, RouterLink, CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

//   form: FormGroup = this.fb.group({
//     from_name: '',
//     to_name: 'Admin',   
//       from_email: '',   
//       message: '', 

//   });


//  constructor(private fb: FormBuilder){}

//    async send(){
//     emailjs.init('_A2IhqMJIUyQbtfaU');
//     let responce= await emailjs.send("service_h9279or","template_lwp0rr7",{
//       from_name: this.form.value.from_name,
//       to_name: this.form.value.to_name,
//       from_email: this.form.value.from_email,
//       message: this.form.value.message,
//       });

//       alert('Message has been sent');
//       this.form.reset();

//   }

// }

form: FormGroup = this.fb.group({
  from_name: ['', Validators.required],
  to_name: ['Admin'],   
  from_email: ['', [Validators.required, Validators.email]], // Adding email validation
  from_phone:'',
  message: ['', Validators.required], 
});

constructor(private fb: FormBuilder) {} 


async send() {
  emailjs.init('_A2IhqMJIUyQbtfaU');
  let response = await emailjs.send("service_h9279or","template_lwp0rr7",{
    from_name: this.form.value.from_name,
    to_name: this.form.value.to_name,
    from_email: this.form.value.from_email,
    from_phone:this.form.value.from_phone,
    message: this.form.value.message,
  });

  alert('Message has been sent');
  this.form.reset();
}
}