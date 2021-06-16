import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNewsComponent } from './carousel-news.component';

describe('CarouselNewsComponent', () => {
  let component: CarouselNewsComponent;
  let fixture: ComponentFixture<CarouselNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
