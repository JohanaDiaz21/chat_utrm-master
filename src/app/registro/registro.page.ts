import { Component, OnInit } from '@angular/core';
import {UserServiceService}from'../services/user-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public user= {
    username: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }
  async createUser(){
    const query = await this.userService.createUser(this.user);
    console.log(query);
  }
}
