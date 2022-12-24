import { getNotificationsSuccessfully, changeNotificationsSuccessfully, changeNotificationsFailed } from './notifications.action';
import { NotificationsService } from './../../services/notifications.service';
import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { mergeMap, map, catchError } from "rxjs/operators";
import { Observable, of } from 'rxjs';

import { HttpErrorResponse } from "@angular/common/http";
import { getNotificationsFailed } from '.';
import { fromNotification } from '..';


@Injectable()
export class Effects {

  getNotifications$: Observable<Action> = createEffect(this.createGetNotificationsEffect.bind(this));
  changeNotification$: Observable<Action> = createEffect(this.createSetNotificationsEffect.bind(this));

  constructor(
    private actions$: Actions,
    private notificationsService: NotificationsService,
  ) {}

  private createGetNotificationsEffect() {
    return this.actions$.pipe(
      ofType(fromNotification.getNotifications),
      mergeMap(() =>
        this.notificationsService.getNotifications().pipe(
          map(list => getNotificationsSuccessfully({list})),
          catchError((error: HttpErrorResponse) => of(getNotificationsFailed({errorMessage: JSON.stringify(error)}))),
        ),
      )
    );
  }

  private createSetNotificationsEffect() {
    return this.actions$.pipe(
      ofType(fromNotification.changeNotifications),
      mergeMap(({item}) => this.notificationsService.deleteRead(item)
        .pipe(
          map(list => changeNotificationsSuccessfully({list})),
          catchError((error: HttpErrorResponse) => of(changeNotificationsFailed({errorMessage: JSON.stringify(error)}))),
        ),
      )
    );
  }
}
