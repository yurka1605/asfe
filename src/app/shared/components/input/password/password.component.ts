import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTypeEnum } from 'src/constants';
import { BaseInputComponent } from '../base-input.component';

@Component({
  selector: 'asfe-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss', '../base-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true
    }
  ]
})
export class PasswordComponent extends BaseInputComponent<string> implements OnInit {
  @Input() showToggle = false;

  public isPasswordShown = false;

  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }

  ngOnInit(): void {
    if (this.placeholder) {
      this.placeholder = <string>InputTypeEnum.PASSWORD;
    }
    this.type = InputTypeEnum.PASSWORD;
  }

  public togglePasswordVisibility(): void {
    this.type = this.isPasswordShown ? InputTypeEnum.PASSWORD : InputTypeEnum.TEXT;
    this.isPasswordShown = !this.isPasswordShown;
  }
}
