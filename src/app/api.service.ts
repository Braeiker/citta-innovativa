import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //private authToken = '73ec5991b8e7d77359fb7465e016fea0fc3352fa792935e499fa8c6d9883595a';
  private authToken: any;
  private headers: any;

  constructor(private http: HttpClient) {}

  getApiKey() {
    this.authToken = sessionStorage.getItem('apiKey');
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${this.authToken}`,
    });
  }

  setApiKey(apikey: string) {
    sessionStorage.setItem('apiKey', apikey);
    console.log('settata apikey: ' + sessionStorage.getItem('apiKey'));
  }

  getUsers(): Observable<any> {
    this.getApiKey();
    const apiUrl = 'https://gorest.co.in/public/v2/users';
    return this.http.get(apiUrl, { headers: this.headers });
  }

  getUserPost(id: string): Observable<any> {
    this.getApiKey();
    const apiUrlPost = `https://gorest.co.in/public/v2/users/${id}/posts`;
    return this.http.get(apiUrlPost, { headers: this.headers });
  }

  deleteUser(id: string): Observable<any> {
    this.getApiKey();
    console.log('settata apikey: ' + this.authToken);
    const apiUrlDelete = `https://gorest.co.in/public/v2/users/${id}/`;
    return this.http.delete(apiUrlDelete, { headers: this.headers });
  }

  allCommentPost(postId: string): Observable<any> {
    this.getApiKey();
    const apiUrlAllCommentPost = `https://gorest.co.in/public/v2/posts/${postId}/comments`;
    return this.http.get(apiUrlAllCommentPost, { headers: this.headers });
  }

  login(user: any): Observable<any> {
    this.getApiKey();
    const baseUrl = 'https://gorest.co.in/public/v2/users';
    return this.http.post(baseUrl, user, { headers: this.headers });
  }
  getAllPost(id: string): Observable<any> {
    this.getApiKey();
    const apiUrlPost = `https://gorest.co.in/public/v2/posts`;
    return this.http.get(apiUrlPost, { headers: this.headers });
  }
  userDet(id: number): Observable<any> {
    this.getApiKey();
    const apiUrlUserDettagli = `https://gorest.co.in/public/v2/users/${id}`;
    return this.http.get(apiUrlUserDettagli, { headers: this.headers });
  }
}
