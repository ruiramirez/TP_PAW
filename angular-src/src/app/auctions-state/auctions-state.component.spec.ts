import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionsStateComponent } from './auctions-state.component';

describe('AuctionsStateComponent', () => {
  let component: AuctionsStateComponent;
  let fixture: ComponentFixture<AuctionsStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionsStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionsStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
