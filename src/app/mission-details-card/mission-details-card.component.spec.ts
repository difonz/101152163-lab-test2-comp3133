import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionDetailsCardComponent } from './mission-details-card.component';

describe('MissionDetailsCardComponent', () => {
  let component: MissionDetailsCardComponent;
  let fixture: ComponentFixture<MissionDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
