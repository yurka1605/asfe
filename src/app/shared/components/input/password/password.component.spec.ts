import { CUSTOM_ELEMENTS_SCHEMA, forwardRef } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTypeEnum } from 'src/constants';

import { PasswordComponent } from './password.component';

describe('PasswordComponent', () => {
  let component: PasswordComponent;
  let fixture: ComponentFixture<PasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => PasswordComponent),
          multi: true
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordComponent);
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

  it('should blur input', fakeAsync(() => {
    component.switcherControl.setValue(true);
    tick();
    expect(component.type).toBe(InputTypeEnum.TEXT);
  }));
});
