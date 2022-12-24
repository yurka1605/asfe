import { createSelector, MemoizedSelector } from "@ngrx/store";
import { INotification } from "src/app/models";
import { AppState } from "../state";
import { State } from "./notifications.reducer";

const selectNotificationData = (state: AppState) => state.notificationData;

export const selectNotifications: MemoizedSelector<AppState, Array<INotification>> = createSelector(
  selectNotificationData,
  (data: State) => data.list
);

export const selectNotificationsError: MemoizedSelector<AppState, string | null> = createSelector(
  selectNotificationData,
  (data: State) => data.errorMessage
);
