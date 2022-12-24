import { createSelector, MemoizedSelector } from "@ngrx/store";
import { ITheme, Themes } from "src/app/models";
import { AppState } from "../state";
import { State } from "./theme.reducer";

// Selectors
const selectThemeData = (state: AppState) => state.themeData;

export const selectTheme: MemoizedSelector<AppState, Themes> = createSelector(
  selectThemeData,
  (data: State) => data.theme
);

export const selectThemeList: MemoizedSelector<AppState, Array<ITheme>> = createSelector(
  selectThemeData,
  (data: State) => data.themeList
);
