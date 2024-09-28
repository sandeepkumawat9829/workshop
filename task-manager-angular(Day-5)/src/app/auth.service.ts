// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   getCurrentUser() {
//     throw new Error('Method not implemented.');
//   }
//   public login(email: string, password: string): void {
//     if (email && password) {
//       localStorage.setItem('currentUser', JSON.stringify({ email }));
//     }
//   }

//   public logout(): void {
//     localStorage.removeItem('currentUser');
//   }

//   public isAuthenticated(): boolean {
//     return Boolean(localStorage.getItem('currentUser'));
//   }

// }




import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // Method to get the current user from local storage
  public getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');  // Returns the user or null
  }

  // Method to log in a user
  public login(email: string, password: string): void {
    if (email && password) {
      localStorage.setItem('currentUser', JSON.stringify({ email, role: 'user' })); // Add role if needed
    }
  }

  // Method to log out a user
  public logout(): void {
    localStorage.removeItem('currentUser');
  }

  // Method to check if a user is authenticated
  public isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('currentUser'));
  }
}
