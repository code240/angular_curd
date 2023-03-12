import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import {GetUsersService} from './../../Service/get-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private userApi : GetUsersService,public router: Router) { }

  ngOnInit(): void {
  }
  name = "";
  SaveUser(vals:any){
    this.userApi.saveUsers(vals).subscribe(() => {
      this.router.navigate(['Fetch']);
    })
  }
}
