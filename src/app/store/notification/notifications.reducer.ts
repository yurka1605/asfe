import { Action, createReducer, on } from '@ngrx/store';
import { INotification } from 'src/app/models';
import * as NotificationActions from './notifications.action';

export interface State {
  errorMessage: string | null;
  list: Array<INotification>;
}

const initialState: State = {
  errorMessage: null,
  list: [],
};

export const notificationReducer = createReducer<State>(
  initialState,
  on(
    NotificationActions.getNotifications,
    (state: State): State => ({...state}),
  ),
  on(
    NotificationActions.getNotificationsSuccessfully,
    (state: State, {list}): State => ({errorMessage: null, list})
  ),
  on(
    NotificationActions.getNotificationsFailed,
    (state: State, {errorMessage}): State => ({...state, errorMessage}),
  ),
  on(
    NotificationActions.changeNotifications,
    (state: State): State => ({...state})
  ),
  on(
    NotificationActions.changeNotificationsFailed,
    (state: State, {errorMessage}): State => ({...state, errorMessage})
  ),
  on(
    NotificationActions.changeNotificationsSuccessfully,
    (state: State, {list}): State => ({errorMessage: null, list})
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return notificationReducer(state, action);
}

