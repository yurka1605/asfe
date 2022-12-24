import { createAction, props } from "@ngrx/store";
import { Themes } from "src/app/models";

export const getThemeData = createAction('[Account Component] GET CURRENT THEME');
export const changeTheme = createAction('[Account Component] CHANGE THEME', props<{theme: Themes}>());
