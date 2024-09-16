import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttonumberconverterComponent } from './texttonumberconverter.component';

describe('TexttonumberconverterComponent', () => {
  let component: TexttonumberconverterComponent;
  let fixture: ComponentFixture<TexttonumberconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexttonumberconverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexttonumberconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
