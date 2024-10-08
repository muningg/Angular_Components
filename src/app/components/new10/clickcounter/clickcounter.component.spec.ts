import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickcounterComponent } from './clickcounter.component';

describe('ClickcounterComponent', () => {
  let component: ClickcounterComponent;
  let fixture: ComponentFixture<ClickcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickcounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
