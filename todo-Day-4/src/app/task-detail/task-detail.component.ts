// src/app/task-detail/task-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task: any;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const taskId = +this.route.snapshot.paramMap.get('id')!;
    this.taskService.getTaskById(taskId).subscribe(
      data => {
        this.task = data;
      },
      error => {
        console.error('Error fetching task:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/task']);
  }
}

