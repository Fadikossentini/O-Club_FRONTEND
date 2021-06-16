import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClubsComponent } from './our-clubs.component';

describe('OurClubsComponent', () => {
  let component: OurClubsComponent;
  let fixture: ComponentFixture<OurClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurClubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
