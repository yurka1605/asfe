import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.disabled).toBe(false);
  });

  it('should change button params', () => {
    const button = fixture.debugElement.query(By.css('button'));
    component.disabled = true;
    fixture.detectChanges();

    expect(button.nativeElement.type).toBe('button');
    expect(button.nativeElement.disabled).toBe(true);
    expect(component.disabled).toBe(true);
  });
});
