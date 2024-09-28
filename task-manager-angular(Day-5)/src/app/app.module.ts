// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// import { RouterModule, Routes } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TaskListComponent } from './app/task-list/task-list.component';
// import { AddTaskComponent } from './app/add-task/add-task.component';
// import { EditTaskComponent } from './app/edit-task/edit-task.component';
// import { LoginComponent } from './app/login/login.component';
// import { AdminGuard } from './app/guards/admin.guard';
// import { authGuard } from './app/guards/auth.guard';
// import { AdminDashboardComponent } from './app/admin/admin-dashboard/admin-dashboard.component';
// import { TabGroupComponent } from './app/tab-group/tab-group.component';
// import { HttpClientModule } from '@angular/common/http';
// export const routes: Routes = [
//   {
//       path: '',
//       component: TaskListComponent,
//       title: 'Tasks',
//       canActivate: [authGuard]
//   },
//   {
//       path: 'add-task',
//       component: AddTaskComponent,
//       title: 'Add Tasks',
//       canActivate: [authGuard]
//   },
//   {
//       path: 'edit-task/:id',
//       component: EditTaskComponent,
//       title: 'Edit task',
//       canActivate: [authGuard]
//   },
//   {
//       path: 'login',
//       component: LoginComponent,
//   },
//   {
//       path: 'admin',
//       loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),  // Lazy load the admin module
//       canActivate: [AdminGuard]
//     },
// ];
// @NgModule({
//   declarations: [
//     AppComponent,
//     AddTaskComponent,
//     AdminDashboardComponent,
//     EditTaskComponent,
//     LoginComponent,
//     TabGroupComponent,
//     TaskListComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     HttpClientModule,

//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }




import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { authGuard } from './auth.guard';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './guards/admin.guard';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { TabGroupComponent } from './tab-group/tab-group.component';



// Define your routes
export const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
    title: 'Tasks',
    canActivate: [authGuard]
  },
  {
    path: 'add-task',
    component: AddTaskComponent,
    title: 'Add Tasks',
    canActivate: [authGuard]
  },
  {
    path: 'edit-task/:id',
    component: EditTaskComponent,
    title: 'Edit task',
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), // Lazy load the admin module
    canActivate: [AdminGuard]
  },
];

@NgModule({
  declarations: [
    // AppComponent,
    // AddTaskComponent,
    // AdminDashboardComponent,
    // EditTaskComponent,
    // LoginComponent,
    // TabGroupComponent,
    // TaskListComponent
  ],
  imports: [
    // BrowserModule,
    // AppRoutingModule,
    // BrowserAnimationsModule,
    // HttpClientModule,
    // RouterModule.forRoot(routes), // Add the RouterModule here
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // Import standalone components here
    AppComponent,
    AddTaskComponent,
    EditTaskComponent,
    LoginComponent,
    TabGroupComponent,
    TaskListComponent
  ],
  providers: [
    AdminGuard, // Register your guards if needed
  ],
  //bootstrap: [AppComponent]
})
export class AppModule { }
