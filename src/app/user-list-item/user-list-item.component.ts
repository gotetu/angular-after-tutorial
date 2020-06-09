import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css',],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListItemComponent implements OnInit {
  @Input()
  user!: User;
  constructor() { }

  ngOnInit() {
  }

}