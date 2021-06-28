import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public form: any;


  users: User[] = [];

  constructor(
    public userService: UserService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required])
    });
  }
  // tslint:disable-next-line: typedef
  get f(){
    return this.form.controls;
  }
    // tslint:disable-next-line: typedef
  forgotPass(){
    this.userService.forgot(this.users);
    // tslint:disable-next-line: deprecation
    this.userService.forgot(this.form.value).subscribe(res => {
      console.log('my forgot Result', res);
    });
    }
}
