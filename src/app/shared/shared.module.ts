import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/session/local-storage.service';
import { StorageService } from './services/session/abstract-session.service';
import { AppPreloadingStrategyService } from './services/app-preloading-strategy.service';
import { InputComponent } from './components/input/text/input.component';
import { PasswordComponent } from './components/input/password/password.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/input/checkbox/checkbox.component';
import { LabelComponent } from './components/input/label/label.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { ErrorComponent } from './components/input/error/error.component';
import { ErrorsPipe } from './pipes/error.pipe';

@NgModule({
  declarations: [
    InputComponent,
    PasswordComponent,
    ButtonComponent,
    CheckboxComponent,
    LabelComponent,
    AutofocusDirective,
    ErrorComponent,
    ErrorsPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputComponent,
    PasswordComponent,
    ButtonComponent,
    CheckboxComponent,
    AutofocusDirective,
    ErrorsPipe,
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
