import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextrumblerComponent } from './textrumbler.component';

describe('TextrumblerComponent', () => {
  let component: TextrumblerComponent;
  let fixture: ComponentFixture<TextrumblerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextrumblerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextrumblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
