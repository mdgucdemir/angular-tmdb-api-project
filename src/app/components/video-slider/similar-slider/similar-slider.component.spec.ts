import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarSliderComponent } from './similar-slider.component';

describe('SimilarSliderComponent', () => {
  let component: SimilarSliderComponent;
  let fixture: ComponentFixture<SimilarSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarSliderComponent]
    });
    fixture = TestBed.createComponent(SimilarSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
