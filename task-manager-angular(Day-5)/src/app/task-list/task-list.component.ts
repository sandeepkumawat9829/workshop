import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Task } from '../task';
//import { QuotesJokesService } from '../quotes-jokes.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  tasks: Task[] = JSON.parse(localStorage.getItem('tasks')!) || []; // Default to an empty array
  quote: string = '';
  joke: string = '';

  // constructor(private quotesJokesService: QuotesJokesService) {}

  // ngOnInit(): void {
  //   this.getRandomQuote();
  //   this.getRandomJoke();
  // }

  // getRandomQuote(): void {
  //   this.quotesJokesService.getRandomQuote().subscribe(response => {
  //     this.quote = response.quote; // Adjust this based on the API response structure
  //   });
  // }

  // getRandomJoke(): void {
  //   this.quotesJokesService.getRandomJoke().subscribe(response => {
  //     this.joke = response.joke; // Adjust this based on the API response structure
  //   });
  // }

  removeTask(id: number): void {
    const taskIndex = this.tasks.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

