// import { Injectable } from '@angular/core';
// import { CanActivateFn } from '@angular/router';
// @Injectable({
//   providedIn:'root'
// })
// export const adminGuard: CanActivateFn = (route, state) => {
//   constructor(private authService:AuthService,private router:Router){}
//   canActivate():boolean{
//     if(!this.authService.isAdmin()){
//       this.router.navigate(['no-access']);
//       return false;
//     }
//     return true;
//   }
// };

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isAdmin()) {
      this.router.navigate(['/no-access']);
      return false;
    }
    return true;
  }
}

