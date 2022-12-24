import { Action, createReducer, on } from '@ngrx/store';
import { Themes, ITheme } from 'src/app/models';
import * as ThemeActions from './theme.action';

export interface State {
  theme: Themes;
  themeList: Array<ITheme>;
}

const initialState: State = {
  theme: Themes.Default,
  themeList: getThemeList(),
};

export const themeReducer = createReducer<State>(
  initialState,
  on(
    ThemeActions.getThemeData,
    (state: State): State => ({...state}),
  ),
  on(
    ThemeActions.changeTheme,
    (state: State, {theme}): State => ({...state, theme})
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return themeReducer(state, action);
}

function getThemeList(): Array<ITheme> {
  const themes = [];
  for (const theme in Themes) {
    if (typeof theme === 'string') {
      themes.push({
        label: theme,
        value: theme,
      });
    }
  }

  return themes;
}

