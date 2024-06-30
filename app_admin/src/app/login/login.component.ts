import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { AuthenticationService } from 
'../services/authentication.service'; 
import { User } from '../models/user'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({ 
  selector: 'app-login', 
  imports: [CommonModule,FormsModule],
  standalone: true,
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'] 
}) 

export class LoginComponent implements OnInit { 

  public formError: string = ''; 

  public credentials = { 
    name: '', 
    email: '', 
    password: '' 
  }; 

  constructor( 
    private router: Router, 
    private authenticationService: AuthenticationService 
  ) { } 
  
  ngOnInit() {
    if(this.isLoggedIn()){
      this.router.navigate(['list-trips']);
    }
  } 
  
  public onLoginSubmit(): void { 
    this.formError = ''; 
    if (!this.credentials.email || !this.credentials.password) { 
      this.formError = 'All fields are required, please try again'; 
    } else { 
      this.doLogin(); 
    } 
  } 

  private doLogin(): void { 
    this.authenticationService.login(this.credentials) 
      .then(() => this.router.navigate(['list-trips'])) 
      .catch((message) => this.formError = message); 

  }

  public isLoggedIn(): boolean{
    return this.authenticationService.isLoggedIn();
  }
} 
