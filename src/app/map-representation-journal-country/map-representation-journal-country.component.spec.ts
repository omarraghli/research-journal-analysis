import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRepresentationJournalCountryComponent } from './map-representation-journal-country.component';

describe('MapRepresentationJournalCountryComponent', () => {
  let component: MapRepresentationJournalCountryComponent;
  let fixture: ComponentFixture<MapRepresentationJournalCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapRepresentationJournalCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapRepresentationJournalCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});