import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailUsecase } from '../../usecase/user-detail.usecase';
import { map, takeUntil, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent implements OnDestroy {
  user$ = this.userDetail.user$;
  private onDestroy$ = new EventEmitter();
  constructor(
    private route: ActivatedRoute,
    private userDetail: UserDetailUsecase
    ) { }

  ngOnInit() {
    this.route.params.pipe(
      takeUntil(this.onDestroy$),
      map(params => params['userId']),
      distinctUntilChanged(),
    ).subscribe(userId => this.userDetail.fetchUser(userId) )
   }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

}