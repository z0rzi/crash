import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from "../models/Todo";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosURL: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = 10;

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      `${this.todosURL}?_limit=${this.todosLimit}`
    );
  }
}
