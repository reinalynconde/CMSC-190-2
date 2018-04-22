import { TestBed, inject } from '@angular/core/testing';

import { OrigamiService } from './origami.service';

describe('OrigamiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrigamiService]
    });
  });

  it('should be created', inject([OrigamiService], (service: OrigamiService) => {
    expect(service).toBeTruthy();
  }));
});
