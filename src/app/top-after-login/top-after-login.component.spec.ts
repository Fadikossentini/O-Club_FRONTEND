import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAfterLoginComponent } from './top-after-login.component';

describe('TopAfterLoginComponent', () => {
  let component: TopAfterLoginComponent;
  let fixture: ComponentFixture<TopAfterLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopAfterLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAfterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
