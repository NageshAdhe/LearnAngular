import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPipesComponent } from './learn-pipes.component';

describe('LearnPipesComponent', () => {
  let component: LearnPipesComponent;
  let fixture: ComponentFixture<LearnPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
