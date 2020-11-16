import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[] = []
  msg:any
  constructor(public userService:UserService,public auth:AuthService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data)=>{
      this.users = data;
    });
  }
  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe((data)=>{
      this.msg = data;
      this.userService.getUsers().subscribe((data)=>{
        this.users = data;
      });
    })
  }

}
