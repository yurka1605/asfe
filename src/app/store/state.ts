import { Action, ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as fromTheme from "./theme";
import * as fromLang from "./lang";
import * as fromNotification from "./notification";

export interface AppState {
  themeData: fromTheme.State;
  langData: fromLang.State;
  notificationData: fromNotification.State;
}

export const reducers: ActionReducerMap<AppState, Action> = {
  themeData: fromTheme.reducer,
  langData: fromLang.reducer,
  notificationData: fromNotification.reducer,
};

export const AppEffects = [
  fromLang.Effects,
  fromNotification.Effects,
];

export function debug(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return <ActionReducer<AppState>>function(state: AppState, action: any): AppState {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = [debug];

