import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreendimensionsComponent } from './screendimensions.component';

describe('ScreendimensionsComponent', () => {
  let component: ScreendimensionsComponent;
  let fixture: ComponentFixture<ScreendimensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreendimensionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreendimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
