import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  //standalone: true,
  //imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ){}

  ngOnInit(): void{
    if (this.isLoggedIn() == true) {
      this.router.navigate(['list-trips']);
    }
  }

  public onLogin(): void{
    this.router.navigate(['login']);
  }

  public isLoggedIn(): boolean{
    return this.authenticationService.isLoggedIn();
  }

  public onLogout(): void{
    this.authenticationService.logout();
    return;
  }

}
