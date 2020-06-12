import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  @Input()
  users!: User[];
  constructor() { }

  ngOnInit() {
  }

}