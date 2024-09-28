import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './modules/adin/admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from './services/task.service';

const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path: 'task',loadChildren:()=>import('./modules/task/task.module').then(m=>m.TaskModule),canActivate:[AuthGuard]},
  {path:'task/new',component:TaskFormComponent,canActivate:[AuthGuard]},
 // {path:'task',loadChildren:()=>import('./modules/task/task.module').then(m=>m.TaskModule),canActivate: [AuthGuard]},
  {path:'admin',loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule),canActivate:[AdminGuard]},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path: '**', redirectTo: '/login' }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TaskFormComponent,
    LoginComponent,
    TaskDetailComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule, 
    CommonModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
