import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUsersService } from 'src/app/Service/get-users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  public userId = "";
  public address = "";
  public currentName = "";
  public occupation = "";
  public gender = "";

  constructor(private userApi : GetUsersService, private route : ActivatedRoute, private location: Location) { 
    route.params.subscribe((param) => {
      this.userId = param["id"];
    })
    this.userApi.users(this.userId).subscribe((data:any) => {
      this.address = data.address;
      this.currentName = data.name;
      this.gender = data.gender;
      this.userId = data.id;
      this.occupation = data.occupation;
    })

  }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

}
