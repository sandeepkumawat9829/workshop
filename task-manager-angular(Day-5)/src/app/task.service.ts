// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {

//   constructor() { }
// }


// import { Injectable } from '@angular/core';
// import { Task } from './task';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {

//   constructor() { }

//   getAllTasks(): Task[] {
//     return JSON.parse(localStorage.getItem('tasks') || '[]');
//   }
// }
import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getAllTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  }
}
