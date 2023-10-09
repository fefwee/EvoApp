import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/postModel';

@Injectable({
  providedIn: 'root'
})
export class RoleModelService {

  role: 'user' | 'admin' = 'user';

  constructor(private http: HttpClient) { }

  public getPost(): Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')
  };

  public getPostId(id: number): Observable<IPost> {
    return this.http.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  };
}
