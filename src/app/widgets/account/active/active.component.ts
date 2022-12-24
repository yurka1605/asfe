import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { INotification } from 'src/app/models';
import { AppState, fromNotification } from 'src/app/store';

@Component({
  selector: 'asfe-account-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

  accountInfo: any | null = null;
  notifications$ = this.store.select(fromNotification.selectNotifications);

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.accountInfo = null;
  }

  getNotification(): void {
    this.store.dispatch(fromNotification.getNotifications());
  }

  markRead(item: INotification): void {
    this.store.dispatch(fromNotification.changeNotifications({item}));
  }
}
