import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseBIComponent } from './analyse-bi.component';

describe('AnalyseBIComponent', () => {
  let component: AnalyseBIComponent;
  let fixture: ComponentFixture<AnalyseBIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseBIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseBIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
