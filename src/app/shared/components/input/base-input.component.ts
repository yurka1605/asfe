import {
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { InputTypeEnum } from 'src/constants';

@Component({
  selector: 'asfe-base-input',
  template: '',
})
export abstract class BaseInputComponent<T> implements ControlValueAccessor {
  @Input() label = '';
  @Input() autocomplete = 'off';
  @Input() placeholder = '';
  private _type = InputTypeEnum.TEXT;

  get type(): InputTypeEnum {
    return this._type;
  }

  set type(val: InputTypeEnum) {
    if (val) {
      this._type = val;
      this.cdr.detectChanges();
    }
  }

  private _val: T | null = null;

  get value(): T {
    return <T>this._val;
  }

  set value(val: T) {
    if (val !== undefined) {
      this._val = val;
      this.cdr.detectChanges();
    }
  }

  protected onChange!: (val: string | boolean) => void;
  public onTouch!: () => void;

  constructor(protected cdr: ChangeDetectorRef) {}

  public onInputValueChanges(event: Event): void {
    this.onChange((<HTMLInputElement>event.target).value);
  }

  public writeValue(obj: T): void {
    this.value = obj;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}

