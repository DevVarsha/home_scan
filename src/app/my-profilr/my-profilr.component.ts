import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-my-profilr',
  templateUrl: './my-profilr.component.html',
  styleUrls: ['./my-profilr.component.scss']
})
export class MyProfilrComponent implements OnInit {

  public form: any;
  public uId: any;
  public usId: any;
  public users1: any;



  users: User[] = [];

  constructor(
    public userService: UserService,
    private router: Router
  ) { }
  ngOnInit(): void {
    // this.form = new FormGroup({
    //   user_name: new FormControl('', Validators.required),
    //   email: new FormControl('', [Validators.required]),
    //   mobile: new FormControl('', [Validators.required]),
    //   whatsapp_number: new FormControl('', [Validators.required]),
    //   address: new FormControl('', [Validators.required])
    // });


    // tslint:disable-next-line: deprecation
    this.userService.getAll(this.users, this.uId).subscribe((data: User[]) =>
  {
    this.uId = localStorage.getItem('logId');
    this.users1 = data;
    console.log('Values',  data );
    console.log('name',  this.users1.result.user_name);
    console.log('name',  this.users1.result.email);
    console.log('name',  this.users1.result.whatsapp_number);
    console.log('name',  this.users1.result.mobile);
    console.log('name',  this.users1.result.address);
    });
  }
  // tslint:disable-next-line: typedef
  get f(){
    return this.form.controls;
  }
    // tslint:disable-next-line: typedef
    updateNow(){

    // tslint:disable-next-line: deprecation

    // tslint:disable-next-line: deprecation
    this.userService.update(this.users, this.usId).subscribe(res => {
      this.usId = localStorage.getItem('logId');
      console.log('my update Result', res);
      console.log('my forgot Result', res.result);
      console.log('my forgot Result', this.usId);
    });
    }
}


