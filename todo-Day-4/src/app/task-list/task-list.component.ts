// import { Component, OnInit } from '@angular/core';
// import { TaskService } from '../services/task.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-task-list',
//   templateUrl: './task-list.component.html',
//   styleUrls: ['./task-list.component.css']
// })
// // export class TaskListComponent implements OnInit{
// //   tasks:any[]=[];
// //   constructor(private taskService:TaskService){}
// //   // ngOnInit(): void {
// //   //     this.taskService.getTasks().subscribe((data:any[]=>{
// //   //       this.tasks=data;
// //   //     });
// //   // }
// //   ngOnInit(): void {
// //     this.taskService.getTasks().subscribe((data: any[]) => {
// //       this.tasks = data;
// //     });
// //   }
  

// // }
// export class TaskFormComponent {
//   task = {
//     title: '',
//     completed: false
//   };

//   constructor(private taskService: TaskService, private router: Router) {}

//   // Handle form submission and add the task
//   onSubmit(): void {
//     this.taskService.addTask(this.task).subscribe(response => {
//       console.log("----->", response)
//       console.log('Task added:', response.title, response.completed ? 'Completed' : 'Pending');
//       this.router.navigate(['/task']);
//     });
//   }
// }


import { Component, OnInit} from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  task = {
    title: '',
    completed: false
  };

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((data: any[]) => {
      this.tasks = data;
    });
  }
  onSubmit(): void {
    this.taskService.addTask(this.task).subscribe(response => {
      console.log('Task added:', response.title, response.completed ? 'Completed' : 'Pending');
      this.task = { title: '', completed: false }; 
      this.loadTasks(); 
    });
  }
}
