import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdetailsdisplayerComponent } from './ipdetailsdisplayer.component';

describe('IpdetailsdisplayerComponent', () => {
  let component: IpdetailsdisplayerComponent;
  let fixture: ComponentFixture<IpdetailsdisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpdetailsdisplayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdetailsdisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
