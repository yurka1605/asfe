import { Action, createReducer, on } from '@ngrx/store';
import { ILang } from 'src/app/models';
import * as LangActions from './lang.action';

export interface State {
  currentLanguage: ILang;
  languages: Array<ILang>;
}

const initialState: State = {
  currentLanguage: {id: 'ru', label: 'RU'},
  languages: [],
};

export const langReducer = createReducer<State>(
  initialState,
  on(
    LangActions.getCurrentLang,
    (state: State): State => ({...state}),
  ),
  on(
    LangActions.changeLang,
    (state: State, {currentLanguage}): State => ({...state, currentLanguage})
  ),
  on(
    LangActions.getAllLanguages,
    (state: State): State => ({...state}),
  ),
  on(
    LangActions.setLanguagesState,
    (state: State, {languages, currentLanguage}): State => ({languages, currentLanguage})
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return langReducer(state, action);
}

