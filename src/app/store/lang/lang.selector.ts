import { createSelector, MemoizedSelector } from "@ngrx/store";
import { ILang } from "src/app/models";
import { AppState } from "..";
import { State } from "./lang.reducer";

// Selectors
const selectLangData = (state: AppState) => state.langData;

export const selectLang: MemoizedSelector<AppState, ILang> = createSelector(
  selectLangData,
  (data: State) => data.currentLanguage
);

export const selectAllLanguages: MemoizedSelector<AppState, Array<ILang>> = createSelector(
  selectLangData,
  (data: State) => data.languages
);
