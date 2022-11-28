import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTypeEnum } from 'src/constants';
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
export class InputComponent extends BaseInputComponent<string> implements OnChanges {
  @Input() inputType: InputTypeEnum = InputTypeEnum.TEXT;
  isFloating = true;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['inputType']) {
      this.type = this.inputType;
    }
  }

  blur(): void {
    this.isFloating = false;
    this.onBlur();
  }
}
