import {
  ChangeDetectionStrategy,
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
  toggle(): void {
    this.writeValue(!this.value);
    this.onChange(this.value);
  }
}
