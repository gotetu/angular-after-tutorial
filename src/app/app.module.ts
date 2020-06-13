import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListItemComponent } from './view/user-list-item/user-list-item.component';
import { UserListComponent } from './view/user-list/user-list.component';
import { UserListUsecase } from './usecase/user-list.usecase';
import { Store } from './service/store.service';
import { UserListFilterComponent } from './view/user-list-filter/user-list-filter.component';
import { UserApiService } from './service/user-api.service';
import { UserDetailPageComponent } from './view/user-detail-page/user-detail-page.component';
import { UserDetailUsecase } from './usecase/user-detail.usecase';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, UserListItemComponent, UserListComponent, UserListFilterComponent, UserDetailPageComponent, ],
  bootstrap:    [ AppComponent ],
  providers: [UserListUsecase, Store, UserApiService, UserDetailUsecase]
})
export class AppModule { }
