import { Component, OnInit} from '@angular/core'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service'; 

@Component({ 
  selector: 'app-navbar', 
  imports: [CommonModule],
  standalone: true,
  templateUrl: './navbar.component.html', 
  styleUrls: ['./navbar.component.css'] 
}) 

export class NavbarComponent implements OnInit { 
  constructor( 
    private router: Router,
    private authenticationService: AuthenticationService
  ) { } 

  ngOnInit(): void {
  }

  public isLoggedIn(): boolean { 
    return this.authenticationService.isLoggedIn();
  } 

  public onLogin(): void{
    this.router.navigate(['login']);
  }

  public onLogout(): void { 
    this.authenticationService.logout();
  } 
}
