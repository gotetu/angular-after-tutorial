import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'users/:userid',
        component: UserDetailPageComponent
      }
    ])
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }