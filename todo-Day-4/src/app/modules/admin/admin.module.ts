import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from '../adin/admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';
console.log("admin module loaded");

const routes: Routes = [
  { path: '', component: AdminDashboardComponent,canActivate:[AdminGuard] }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
