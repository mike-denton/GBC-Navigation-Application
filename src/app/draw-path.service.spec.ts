import { TestBed } from '@angular/core/testing';

import { DrawPathService } from './draw-path.service';

describe('DrawPathServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawPathService = TestBed.get(DrawPathService);
    expect(service).toBeTruthy();
  });
});
