// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginData = {
//     email: '',
//     password: ''
//   };

//   constructor(private router: Router) {}

//   onSubmit(): void {
//     if (this.loginData.email === 'admin@example.com' && this.loginData.password === 'admin') {
//       localStorage.setItem('userRole', 'admin');
//       this.router.navigate(['/admin']);
//     } else if (this.loginData.email && this.loginData.password) {
//       localStorage.setItem('userRole', 'user');
//       this.router.navigate(['/task']);
//     } else {
//       alert('Invalid credentials');
//     }
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    const { email, password } = this.loginData;

    if (email === 'admin@example.com' && password === 'admin') {
      this.authService.login('admin');
      this.router.navigate(['/admin']);
    } 
    else if (email && password) {
      this.authService.login('user');
      this.router.navigate(['/task']);
    } 
    else {
      alert('Invalid credentials');
    }
  }
}

