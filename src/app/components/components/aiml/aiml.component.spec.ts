import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIMLComponent } from './aiml.component';

describe('AIMLComponent', () => {
  let component: AIMLComponent;
  let fixture: ComponentFixture<AIMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIMLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AIMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
