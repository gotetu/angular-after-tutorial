import { Component, VERSION } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  users = this.userService.users$;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.fetchUsers();
  }

}
