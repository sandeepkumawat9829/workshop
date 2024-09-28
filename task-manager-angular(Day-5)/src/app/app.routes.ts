import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
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
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),  // Lazy load the admin module
        canActivate: [AdminGuard]
      },
];

@NgModule({
    imports: [RouterModule.forRoot(routes),HttpClientModule,],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }