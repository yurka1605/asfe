import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInputComponent } from '../base-input.component';

@Component({
  selector: 'asfe-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent extends BaseInputComponent<boolean> {
  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }

  toggle(): void {
    this.writeValue(!this.value);
    this.onChange(this.value);
  }
}
