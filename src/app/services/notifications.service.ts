import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INotification } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private list: Array<INotification> = [
    {
      id: 0,
      icon: 'bell',
      author: 'Default',
      text: 'You are registration in Yandex service',
      time: new Date,
    },
    {
      id: 1,
      icon: '',
      author: 'Yandex',
      text: 'You are registration in Yandex service',
      time: new Date,
    },
    {
      id: 2,
      icon: '',
      author: 'Google',
      text: 'You are registration in Google service',
      time: new Date,
    }
  ];

  constructor() {}

  getNotifications(): Observable<Array<INotification>> {
    return of(this.list);
  }

  deleteRead(item: INotification): Observable<Array<INotification>> {
    this.list = this.list.filter(el => el.id !== item.id);
    return of(this.list);
  }
}
