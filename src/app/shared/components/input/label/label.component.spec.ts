import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LabelComponent } from './label.component';

describe('LabelComponent', () => {
  let component: LabelComponent;
  let fixture: ComponentFixture<LabelComponent>;
  let labelText = 'This is input label';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelComponent);
    component = fixture.componentInstance;
    component.label = labelText;
    component.required = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show label', () => {
    const label = fixture.debugElement.query(By.css('.float-label')).nativeElement as HTMLLabelElement;
    expect(label.innerText).toBe(`${labelText} *`);
  });
});
