import { Component, OnInit } from '@angular/core';
import {GetUsersService} from './../../Service/get-users.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  public user : any;
  
  constructor(private userData : GetUsersService) { 
    this.userData.users().subscribe((data) => {
      this.user = data;
    })
  }

  ngOnInit(): void {
  }

  public deleteThisUser(id:any){
    let x = confirm("Are you sure? you want to delete the record number " + id);
    if(x){
      this.userData.deleteUser(id).subscribe((data) => {
        let newusers = this.user.filter((item:any)=>{
          return id !== item.id;
        })
        this.user = newusers;
  
      })
    }
  }
  
}
