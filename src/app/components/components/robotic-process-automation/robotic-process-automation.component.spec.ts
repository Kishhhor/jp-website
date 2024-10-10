import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticProcessAutomationComponent } from './robotic-process-automation.component';

describe('RoboticProcessAutomationComponent', () => {
  let component: RoboticProcessAutomationComponent;
  let fixture: ComponentFixture<RoboticProcessAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticProcessAutomationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoboticProcessAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
