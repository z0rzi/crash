import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from "../models/Todo";
import { HttpClient, HttpHeaders } from '@angular/common/http';

type apiAnswer = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const httpOptions = {
  headers: new HttpHeaders({
    'ContentType': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosURL = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = 10;

  constructor(
    private http: HttpClient,
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      `${this.todosURL}?_limit=${this.todosLimit}`
    );
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  toggleCompleted(todo: Todo): Observable<apiAnswer> {
    const res = this.http.put<apiAnswer>(
      `${this.todosURL}/${todo.id}`,
      todo,
      httpOptions
    );

    res.subscribe(r => {
      console.log(r);
    });

    return res;
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosURL, todo, httpOptions);
  }
}
