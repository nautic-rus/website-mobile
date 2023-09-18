import { TestBed } from '@angular/core/testing';

import { VacancyManagerService } from './vacancy-manager.service';

describe('VacancyManagerService', () => {
  let service: VacancyManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacancyManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
