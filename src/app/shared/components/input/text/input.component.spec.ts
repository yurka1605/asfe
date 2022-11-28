import { CUSTOM_ELEMENTS_SCHEMA, forwardRef } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTypeEnum } from 'src/constants';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => InputComponent),
          multi: true
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should blur input', () => {
    const onBlurSpy = spyOn(component, 'onBlur');
    component.blur();
    expect(component.isFloating).toBe(false);
    expect(onBlurSpy).toHaveBeenCalled();
  });
});
