import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceremoverComponent } from './spaceremover.component';

describe('SpaceremoverComponent', () => {
  let component: SpaceremoverComponent;
  let fixture: ComponentFixture<SpaceremoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceremoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceremoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
