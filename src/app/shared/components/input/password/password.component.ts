import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
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
  @Input() toggleText = 'Show password';
  @Input() override placeholder = <string>InputTypeEnum.PASSWORD;
  switcherControl = new FormControl(false);

  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }

  ngOnInit(): void {
    this.type = InputTypeEnum.PASSWORD;
    this.switcherControl.valueChanges.subscribe(value => {
      this.type = value ? InputTypeEnum.TEXT : InputTypeEnum.PASSWORD;
    });
  }
}
