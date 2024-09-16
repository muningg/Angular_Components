import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopbuttonComponent } from './popbutton.component';

describe('PopbuttonComponent', () => {
  let component: PopbuttonComponent;
  let fixture: ComponentFixture<PopbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
