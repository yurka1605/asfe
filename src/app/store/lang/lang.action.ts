import { createAction, props } from "@ngrx/store";
import { ILang } from "src/app/models";

export const getCurrentLang = createAction('[Account Page] GET CURRENT LANG');
export const getAllLanguages = createAction('[Account Page] GET ALL LANGUAGES');
export const changeLang = createAction('[Account Page] CHANGE LANG', props<{currentLanguage: ILang}>());
export const setLanguagesState = createAction('[Account Page] SET LANGUAGES STATE', props<{languages: Array<ILang>; currentLanguage: ILang}>());
