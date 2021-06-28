import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  public form: any;


  users: User[] = [];

  constructor(
    public userService: UserService,
    private router: Router
  ) { }
  ngOnInit(): void {
    // this.form = new FormGroup({
    //   email: new FormControl('', [Validators.required])
    // });
  }
  // tslint:disable-next-line: typedef
  get f(){
    return this.form.controls;
  }
     // tslint:disable-next-line: typedef
     update_profile(){
      this.userService.forgot(this.users);
      // tslint:disable-next-line: deprecation
      this.userService.forgot(this.form.value).subscribe(res => {
        console.log('my forgot Result', res);
      });
      }
}
