import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string='https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http:HttpClient) { }

  getRecord(){
    return (this.http.get(this.baseUrl))
  }

  PostData(obj:any){
      return (this.http.post(this.baseUrl,obj));
  }

  Updatedata(obj:any){
      return (this.http.put(`${this.baseUrl}/${obj.id}`,obj));
  }

  DeleteData(id:any){
    return (this.http.delete(`${this.baseUrl}/${id}`));
  }

}
