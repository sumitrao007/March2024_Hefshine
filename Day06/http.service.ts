import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string='https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http:HttpClient) { }

  getRecord(){

  }

}
