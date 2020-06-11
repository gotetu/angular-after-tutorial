import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Store } from './store.service';
import { UserApiService } from './user-api.service';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserListUsecase {

  constructor(private userApi: UserApiService, private store: Store) { }
  get users$() {
    return this.store
    .select(state => state.userList)
    .pipe(
      map(({ items, filter }) => 
        items.filter(user =>
          (user.first_name + user.last_name).includes(filter.nameFilter)
        )
      )
    );
  }
  get filter$() {
    return this.store.select(state => state.userList.filter);
  }
  async fetchUsers() {
    const users = await this.userApi.getAllUsers();
    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        items: users,
      }
    }));
  }
  setNameFilter(nameFilter: string) {
    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        filter: {
          nameFilter
        }
      }
    }));
  }

}