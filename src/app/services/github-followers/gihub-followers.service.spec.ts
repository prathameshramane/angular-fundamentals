import { TestBed } from '@angular/core/testing';

import { GihubFollowersService } from './gihub-followers.service';

describe('GihubFollowersService', () => {
  let service: GihubFollowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GihubFollowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
