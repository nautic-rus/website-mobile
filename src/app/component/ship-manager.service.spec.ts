import { TestBed } from '@angular/core/testing';

import { ShipManagerService } from './ship-manager.service';

describe('ShipManagerService', () => {
  let service: ShipManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
