import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  item:User;
  list:User[];
  msg:string;

  constructor(private _service:UserService) {
    this.item=new User();
    this._service.GetAll().subscribe(k=>this.list=k)
   }

  ngOnInit() {
  }
public Add(){
  this._service.Add(this.item).subscribe(k=>this.msg=k)
}
public Search(){
  this._service.search(this.item.userId).subscribe(k=>this.item=k)
  console.log(this.item);
}
public Update()
{
  this._service.Update(this.item).subscribe(k=>k=this.msg)
}
public Delete(){
  this._service.Delete(this.item.userId).subscribe(k=>k=this.msg);
}}