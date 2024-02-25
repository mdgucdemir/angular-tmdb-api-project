import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPersonComponent } from './popular-person.component';

describe('PopularPersonComponent', () => {
  let component: PopularPersonComponent;
  let fixture: ComponentFixture<PopularPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularPersonComponent]
    });
    fixture = TestBed.createComponent(PopularPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
