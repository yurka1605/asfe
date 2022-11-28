import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, ValidationErrors } from '@angular/forms';
import { InputTypeEnum } from 'src/constants';

type OnChangeFnType<T> = (val: T | string | null) => void;

@Component({template: ''})
export abstract class BaseInputComponent<T> implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() autocomplete: string = 'off';
  @Input() placeholder: string = '';
  @Input() autofocus: boolean = false;
  @Input() error: ValidationErrors | null = null;
  @Input() required: boolean = false;
  @Output() typeChanged: EventEmitter<InputTypeEnum> = new EventEmitter<InputTypeEnum>();
  public touched: boolean = false;
  private _type: InputTypeEnum = InputTypeEnum.TEXT;

  constructor() {

  }

  get type(): InputTypeEnum {
    return this._type;
  }

  set type(val: InputTypeEnum) {
    if (val) {
      this._type = val;
      this.typeChanged.emit(val);
    }
  }

  private _val: T | null = null;

  get value(): T {
    return <T>this._val;
  }

  set value(val: T | null) {
    if (val !== undefined) {
      this._val = val;
      if (this.onChange) {
        this.onChange(val);
      }
    }
  }

  protected onChange: OnChangeFnType<T>;
  public onTouch: () => void;

  markAsTouched() {
    if (!this.touched) {
      this.runOnTouch();
      this.touched = true;
    }
  }

  onBlur(): void {
    this.markAsTouched();
    this.runOnTouch();
  }

  onInputValueChanges(event: Event): void {
    const inputValue = (<HTMLInputElement>event.target).value as unknown as T;
    this.writeValue(inputValue);
  }

  writeValue(obj: T | null): void {
    this.value = obj;
  }

  registerOnChange(fn: OnChangeFnType<T>): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  private runOnTouch(): void {
    if (this.onTouch) {
      this.onTouch();
    }
  }
}

