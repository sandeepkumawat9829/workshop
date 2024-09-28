// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin-dashboard',
//   standalone: true,
//   imports: [],
//   templateUrl: './admin-dashboard.component.html',
//   styleUrl: './admin-dashboard.component.css'
// })
// export class AdminDashboardComponent {

// }


import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';  // Assuming Task interface is defined globally
import { TaskService } from '../../task.service';  // Create a service to handle task data

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  allTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks(): void {
    this.allTasks = this.taskService.getAllTasks();  // Method to fetch all tasks
  }
}
