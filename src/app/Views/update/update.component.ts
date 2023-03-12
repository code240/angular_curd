import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetUsersService } from 'src/app/Service/get-users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public userId = "";
  public address = "";
  public currentName = "";
  public occupation = "";
  public gender = "";

  constructor(private usersApi : GetUsersService, route: ActivatedRoute, private router : Router) { 
    route.params.subscribe((params) => {
      this.userId = params["id"];
    });
    this.usersApi.users(this.userId).subscribe((data:any) => {
      this.address = data.address;
      this.currentName = data.name;
      this.gender = data.gender;
      this.userId = data.id;
      this.occupation = data.occupation;
    })
  }


  ngOnInit(): void {
  }

  updateUser(vals:any){
    this.usersApi.updateUsers(this.userId,vals).subscribe((data) => {
      this.router.navigate(['Fetch']);
    })
  }

}
