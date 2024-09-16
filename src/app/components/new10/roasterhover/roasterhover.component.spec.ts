import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoasterhoverComponent } from './roasterhover.component';

describe('RoasterhoverComponent', () => {
  let component: RoasterhoverComponent;
  let fixture: ComponentFixture<RoasterhoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoasterhoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoasterhoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
