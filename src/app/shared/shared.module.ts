import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/session/local-storage.service';
import { StorageService } from './services/session/abstract-session.service';
import { AppPreloadingStrategyService } from './services/app-preloading-strategy.service';
import { InputComponent } from './components/input/text/input.component';
import { PasswordComponent } from './components/input/password/password.component';
import { BaseInputComponent } from './components/input/base-input.component';

@NgModule({
  declarations: [
    InputComponent,
    PasswordComponent,
    BaseInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputComponent,
    PasswordComponent,
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
