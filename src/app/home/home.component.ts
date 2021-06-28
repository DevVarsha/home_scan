import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../user';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public form: any;
  public id: any;
  public result: any;
  // public processResults: any;
  public userId: any;

  // public obj: any;


  users: User[] = [];

  constructor(
    public userService: UserService,
    private router: Router
  ) { }
  ngOnInit(): void {

    // tslint:disable-next-line: deprecation
    // this.userService.getAll(this.userId).subscribe((data: User[]) => {
    //   this.users = data;
    //   console.log(this.users);
    //   console.log('successfully get all!!');
      // tslint:disable-next-line: no-unused-expression
      // localStorage.getItem('logType') === 'ADMIN';
    // });
}
}
