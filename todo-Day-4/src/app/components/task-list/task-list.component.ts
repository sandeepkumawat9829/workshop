// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-task-list',
//   templateUrl: './task-list.component.html',
//   styleUrls: ['./task-list.component.css']
// })
// export class TaskListComponent {

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

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

  // Fetch the list of tasks
  loadTasks(): void {
    this.taskService.getTasks().subscribe((data: any[]) => {
      this.tasks = data;
    });
  }

  // Handle form submission and add the task
  onSubmit(): void {
    this.taskService.addTask(this.task).subscribe((response) => {
      console.log('Task added:', response.title, response.completed ? 'Completed' : 'Pending');
      this.task = { title: '', completed: false }; // Reset the form
      this.loadTasks(); // Refresh the task list
    });
  }
}

