// // import { Component } from '@angular/core';
// // import { TaskService } from 'src/app/services/task.service';

// // @Component({
// //   selector: 'app-admin-dashboard',
// //   templateUrl: './admin-dashboard.component.html',
// //   styleUrls: ['./admin-dashboard.component.css']
// // })
// // export class AdminDashboardComponent implements onInit {
// //   users:any[]=[];
// //   tasks:any[]=[];
// //   constructor(private taskService:TaskService){}
// //   this.taskService.getTasks().subscribe((data:any[]=>{
// //     this.tasks=data;
// //     // this.users=[
// //     //   {id:1,name:'User A',tasks:this.tasks.filter(task.userId===1)}
// //     //   {id:2,name:'User B',tasks:this.tasks.filter(task.userId===2)}
// //     // ];
// //     this.users = [
// //       { id: 1, name: 'User A', tasks: this.tasks.filter(task => task.userId === 1) },
// //       { id: 2, name: 'User B', tasks: this.tasks.filter(task => task.userId === 2) }
// //     ];
    
// //   });
// // }



// import { Component, OnInit } from '@angular/core';
// import { TaskService } from 'src/app/services/task.service';

// @Component({
//   selector: 'app-admin-dashboard',
//   templateUrl: './admin-dashboard.component.html',
//   styleUrls: ['./admin-dashboard.component.css']
// })
// export class AdminDashboardComponent implements OnInit {
//   users: any[] = [];
//   tasks: any[] = [];

//   constructor(private taskService: TaskService) { }

//   ngOnInit(): void {
//     this.taskService.getTasks().subscribe((data: any[]) => {
//       this.tasks = data;
//       this.users = [
//         { id: 1, name: 'User A', tasks: this.tasks.filter(task => task.userId === 1) },
//         { id: 2, name: 'User B', tasks: this.tasks.filter(task => task.userId === 2) }
//       ];
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: any[] = [];
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data: any[]) => {
      this.tasks = data.slice(0, 10); // Limiting to first 10 tasks for demonstration
      this.users = [
        { id: 1, name: 'User A', tasks: this.tasks.filter(task => task.userId === 1) },
        { id: 2, name: 'User B', tasks: this.tasks.filter(task => task.userId === 2) },
        { id: 3, name: 'User C', tasks: this.tasks.filter(task => task.userId === 3) }
      ];
    });
  }
}

