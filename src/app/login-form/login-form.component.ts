import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  private user: string;
  private password: string;
  private valid = false;
  private submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  authenticateUser () {
    this.submitted = true;
    this.userService.authenticateUser(this.user, this.password)
      .subscribe(evaluate => this.valid = evaluate);
  }
}
