import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/session/local-storage.service';
import { StorageService } from './services/session/abstract-session.service';
import { AppPreloadingStrategyService } from './services/app-preloading-strategy.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AppPreloadingStrategyService,
    {
      provide: StorageService,
      useClass: LocalStorageService,
    },
    {
      provide: 'Window',
      useValue: window
    },
  ],
})
export class SharedModule { }
