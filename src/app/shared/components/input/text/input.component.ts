import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInputComponent } from '../base-input.component';

@Component({
  selector: 'asfe-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss', '../base-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends BaseInputComponent<string> {
  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }
}
