import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  url = "http://localhost:3000/users";
  constructor(private http : HttpClient) { }
  
  users(id:any = ""){
    return this.http.get(`${this.url}/${id}`);
  }

  saveUsers(data:any){
    return this.http.post(this.url,data);
  }

  updateUsers(id:string,data:any){
    return this.http.put(`${this.url}/${id}`, data);
  }
  deleteUser(id:string){
    return this.http.delete(`${this.url}/${id}`)
  }
}
