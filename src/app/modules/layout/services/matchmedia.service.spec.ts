import { TestBed } from '@angular/core/testing';

import { MatchMediaService } from './matchmedia.service';

describe('MatchMediaService', () => {
  let service: MatchMediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchMediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
