import { TestBed } from '@angular/core/testing';

import { SparkApiService } from './spark-api.service';

describe('SparkApiService', () => {
  let service: SparkApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparkApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
