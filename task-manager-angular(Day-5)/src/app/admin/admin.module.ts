// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { AdminRoutingModule } from './admin-routing.module';


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     AdminRoutingModule
//   ]
// })
// export class AdminModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MatCardModule } from '@angular/material/card';  // Include required Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AdminModule { }

