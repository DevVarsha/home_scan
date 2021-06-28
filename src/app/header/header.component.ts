import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../user';
import * as firebase from 'firebase';


import { AppComponent } from '../app.component';
import { $ } from 'protractor';
import { NONE_TYPE } from '@angular/compiler';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  public form: any;
  public id: any;
  public result: any;
  public uId: any;
  public userId: any;
  public users1: any;
  // tslint:disable-next-line: variable-name
  public user_name: any;


  users: User[] = [];

  constructor(
    public userService: UserService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      user_name: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      whatsapp_number: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    });

    // tslint:disable-next-line: deprecation
    this.userService.getAll(this.users, this.uId).subscribe((data: User[]) =>
  {
    this.uId = localStorage.getItem('logId');
    this.users1 = data;
    console.log('Values',  data );
    console.log('name',  this.users1.result.user_name);
    });
  }
 // tslint:disable-next-line: typedef
 get f(){
  return this.form.controls;
}
// tslint:disable-next-line: typedef
submit(){
  console.log(this.form.value);
  // tslint:disable-next-line: deprecation
  this.userService.create(this.form.value).subscribe(res => {
    console.log('my Registration Result', res);
    console.log('registerd successfully!');
  });
}

// tslint:disable-next-line: typedef
login(){
  console.log(this.form.value);
  // tslint:disable-next-line: deprecation
  this.userService.find(this.form.value).subscribe(res => {
    this.userId = res.id;
    localStorage.setItem('logId', this.userId);
    localStorage.setItem('isLoggedIn', 'true');
    console.log('my_id', this.userId);
    console.log('my', res.id);
    console.log('my', res.result);
    console.log('login successfully!');

  });
}

// tslint:disable-next-line: typedef
onLogoutClick(){
  this.userService.logout();
  localStorage.setItem('isLoggedIn', 'false');
  localStorage.removeItem('logData');
  console.log('logout successful', this.users1.result.user_name);
  this.router.navigateByUrl('/');
}
 // tslint:disable-next-line: typedef


}
