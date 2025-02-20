import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSlideToggleComponent } from './custom-slide-toggle.component';

describe('CustomSlideToggleComponent', () => {
  let component: CustomSlideToggleComponent;
  let fixture: ComponentFixture<CustomSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomSlideToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
