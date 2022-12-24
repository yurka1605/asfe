import { Component, OnDestroy } from '@angular/core';
import { AppState, fromTheme, fromLang } from 'src/app/store';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { ILang, Themes } from 'src/app/models';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'asfe-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  eThemes = Themes;

  // isAuth$ = this.store.select(fromLogin.selectAuthentication);

  themesList$ = this.store.select(fromTheme.selectThemeList);
  theme$ = this.store.select(fromTheme.selectTheme);

  currentLang$ = this.store.select(fromLang.selectLang);
  languages$ = this.store.select(fromLang.selectAllLanguages);

  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
  ) {}

  logout() {
    this.authService.logout();
  }

  changeTheme(isDark: boolean): void {
    this.store.dispatch(fromTheme.changeTheme({
      theme: isDark ? Themes.Dark : Themes.Default
    }));
  }

  changeLanguage(currentLanguage: ILang): void {
    this.store.dispatch(fromLang.changeLang({currentLanguage}));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
