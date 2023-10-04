import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../resolver/pre-item-resolver.resolver';

@Injectable({
  providedIn: 'root'
})
export class RequestDataService {

  constructor(private http: HttpClient) { }

  public getAllPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  public getCommentsWitchParams() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments',
      { params: new HttpParams().set('postId', '1') })
  }

  public sendPost() {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {})
  }
  public getPostError() {
    return this.http.get('https://jsonplaceholder.typicode.com/post')
  }

  public getSendHeaders() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts',
      {
        headers: new HttpHeaders(
          { 'X-Test': '1' }
        ),
        responseType: 'text'
      })
  }

  public deletePost() {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
  }

  public resolvePost(): Observable<IPost> {
    return this.http.get<IPost>('https://jsonplaceholder.typicode.com/posts/1')
  }

}
