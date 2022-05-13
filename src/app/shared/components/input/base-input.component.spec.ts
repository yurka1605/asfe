import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInputComponent } from './base-input.component';

describe('BaseInputComponent', () => {
  let component: BaseInputComponent<string>;
  let fixture: ComponentFixture<BaseInputComponent<string>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseInputComponent) as ComponentFixture<BaseInputComponent<string>>;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
