// import { CanActivateFn } from '@angular/router';
// import { Injectable } from '@angular/core';
// @Injectable({
//   providedIn:'root'
// })
// export const authGuard: CanActivateFn = (route, state) => {
//   constructor(private authService:AuthService,private router:Router){}
//       canActivate():boolean{
//         if(!this.authService.isLoggedIn()){
//           this.router.navigate(['/login']);
//           return false;
//         }
//         return true;
//       }
    
// };




// export class authGuard implements CanActivateFn{
//       constructor(private authService:AuthService,private router:Router){}
//       canActivate():boolean{
//         if(!this.authService.isLoggedIn()){
//           this.router.navigate(['login']);
//           return false;
//         }
//         return true;
//       }
//     }
// }



import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

