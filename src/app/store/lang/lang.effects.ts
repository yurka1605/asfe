import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { mergeMap, map, catchError, distinctUntilChanged } from "rxjs/operators";
import { EMPTY, Observable, of } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';

import { HttpErrorResponse } from "@angular/common/http";
import { fromLang } from "..";


@Injectable()
export class Effects {

  changeLang$: Observable<Action> = createEffect(this.createChangeLanguagesEffect.bind(this));

  constructor(
    private actions$: Actions,
    private translocoService: TranslocoService,
  ) {}

  private createChangeLanguagesEffect() {
    return this.actions$.pipe(
      ofType(fromLang.changeLang),
      distinctUntilChanged(),
      mergeMap(data =>
        of(this.translocoService.setActiveLang(data.currentLanguage.id)).pipe(
          map(() => data),
          catchError((error: HttpErrorResponse) => EMPTY)
        ),
      )
    );
  }
}
