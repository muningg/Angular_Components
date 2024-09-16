import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextreverserComponent } from './textreverser.component';

describe('TextreverserComponent', () => {
  let component: TextreverserComponent;
  let fixture: ComponentFixture<TextreverserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextreverserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextreverserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
