import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  logout() {
    this.authService.logout().subscribe((_data) => {
      this.router.navigate(['/sign-in']);
    });
  }
}
