import { AuthService } from 'src/app/shared/services/auth.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('AuthService', ['login', 'logout']);
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ AuthComponent ],
      providers: [
        {
          provide: AuthService,
          useValue: spy,
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
