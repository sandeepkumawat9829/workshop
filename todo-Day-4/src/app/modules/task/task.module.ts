import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskDetailComponent } from 'src/app/task-detail/task-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { TaskListComponent } from 'src/app/components/task-list/task-list.component';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {path:'list',component:TaskListComponent , canActivate:[AuthGuard]},
  {path:'detail/:id',component:TaskDetailComponent, canActivate:[AuthGuard]},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaskRoutingModule,
    RouterModule.forChild(routes),
    FormsModule

  ]
})
export class TaskModule { }
