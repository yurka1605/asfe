import { createAction, props } from "@ngrx/store";
import { INotification } from "src/app/models";

export const getNotifications = createAction('[Account] GET NOTIFICATIONS');
export const getNotificationsSuccessfully = createAction('[Account] GET NOTIFICATIONS SUCCESSFULLY', props<{list: Array<INotification>}>());
export const getNotificationsFailed = createAction('[Account] GET NOTIFICATIONS FAILED', props<{errorMessage: string}>());

export const changeNotifications = createAction('[Account] CHANGE NOTIFICATION LIST', props<{item: INotification}>());
export const changeNotificationsSuccessfully = createAction('[Account] CHANGE NOTIFICATIONS SUCCESSFULLY', props<{list: Array<INotification>}>());
export const changeNotificationsFailed = createAction('[Account] CHANGE NOTIFICATIONS FAILED', props<{errorMessage: string}>());
