import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { roleAccessGuard } from './role-access.guard';

describe('roleAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => roleAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
