// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { TaskService } from 'src/app/services/task.service';

// @Component({
//   selector: 'app-task-form',
//   templateUrl: './task-form.component.html',
//   styleUrls: ['./task-form.component.css']
// })
// export class TaskFormComponent {
//  task={
//   title:'',
//   completed:false
//  };
//  constructor(private taskService:TaskService,private router:Router){}
//  onSubmit():void{
//   this.taskService.addTask(this.task).subscribe(response=>{
//     console.log('Task added:',response);
//     this.router.navigate[('/task')];
//   });
//  }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task = {
    title: '',
    completed: false
  };

  constructor(private taskService: TaskService, private router: Router) { }

  onSubmit(): void {
    this.taskService.addTask(this.task).subscribe(response => {
      console.log('Task added:', response);
      this.router.navigate(['/task']); 
    });
  }
}
