import { TestBed } from '@angular/core/testing';

import { AppPreloadingStrategyService } from './app-preloading-strategy.service';

describe('AppPreloadingStrategyService', () => {
  let service: AppPreloadingStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppPreloadingStrategyService],
    });
    service = TestBed.inject(AppPreloadingStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
