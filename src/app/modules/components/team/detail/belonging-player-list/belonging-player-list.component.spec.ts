import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelongingPlayerListComponent } from './belonging-player-list.component';

describe('BelongingPlayerListComponent', () => {
  let component: BelongingPlayerListComponent;
  let fixture: ComponentFixture<BelongingPlayerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BelongingPlayerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BelongingPlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
