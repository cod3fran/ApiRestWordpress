import { TestBed, inject } from '@angular/core/testing';

import { DirectusService } from './directus.service';

describe('DirectusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectusService]
    });
  });

  it('should be created', inject([DirectusService], (service: DirectusService) => {
    expect(service).toBeTruthy();
  }));
});
