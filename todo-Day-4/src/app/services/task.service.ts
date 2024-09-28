// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {
//   getTaskById(taskId: number) {
//     throw new Error('Method not implemented.');
//   }
//  private apiUrl='https://jsonplaceholder.typicode.com/todos';
//   constructor(private http:HttpClient) { }
//   getTasks():Observable<any[]>{
//     return this.http.get<any[]>(this.apiUrl);
//   }
//   addTask(task:any):Observable<any>{
//     return this.http.post<any>(this.apiUrl,task);
//   }
//   // deleteTask(id:number):Observable<any>{
//   //   return this.http.delete('${this.apiUrl}/${id}');
//   // }
//   deleteTask(id: number): Observable<any> {
//     return this.http.delete(`${this.apiUrl}/${id}`); // Correct backticks
//   }
  
// }

// src/app/services/task.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTaskById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addTask(task: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

