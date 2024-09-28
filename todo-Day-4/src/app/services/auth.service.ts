import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
   isLoggedIn():boolean{
    return !!localStorage.getItem('userRole');
   }
   isAdmin():boolean{
    return localStorage.getItem('userRole')==='admin';
   }
   logout():void{
    localStorage.removeItem('userRole');
   }
   login(role: string): void {
    localStorage.setItem('userRole', role);
  }
}
