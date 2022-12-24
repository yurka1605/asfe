import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './logo/logo.component';
import { AccountComponent } from './account/account.component';
import { ActiveComponent } from './account/active/active.component';
import { TranslocoRootModule } from '../transloco-root.module';

@NgModule({
  declarations: [ActiveComponent, AccountComponent, LogoComponent],
  imports: [
    CommonModule,
    TranslocoRootModule,
  ],
  exports: [
    ActiveComponent,
    AccountComponent,
    LogoComponent
  ],
})
export class WidgetModule { }
