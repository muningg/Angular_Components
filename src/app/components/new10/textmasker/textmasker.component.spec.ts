import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextmaskerComponent } from './textmasker.component';

describe('TextmaskerComponent', () => {
  let component: TextmaskerComponent;
  let fixture: ComponentFixture<TextmaskerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextmaskerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextmaskerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
