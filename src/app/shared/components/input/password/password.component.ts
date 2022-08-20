import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
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
    },
  ]
})
export class PasswordComponent extends BaseInputComponent<string> implements OnInit, OnDestroy {
  @Input() showToggle = false;
  @Input() toggleText = 'Show password';
  @Input() override placeholder = <string>InputTypeEnum.PASSWORD;
  isFloating = false;
  switcherControl = new FormControl(false);
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.type = InputTypeEnum.PASSWORD;
    this.switcherControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(isShow => {
        this.type = isShow ? InputTypeEnum.TEXT : InputTypeEnum.PASSWORD;
      });
  }

  blur(): void {
    this.isFloating = false;
    this.onBlur();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
