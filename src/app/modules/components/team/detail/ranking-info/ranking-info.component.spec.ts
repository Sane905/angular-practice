import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingInfoComponent } from './ranking-info.component';

describe('RankingInfoComponent', () => {
  let component: RankingInfoComponent;
  let fixture: ComponentFixture<RankingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
