import { TestBed, async, inject } from '@angular/core/testing';

import { LoginUsersGuard } from './login-users.guard';

describe('LoginUsersGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginUsersGuard]
    });
  });

  it('should ...', inject([LoginUsersGuard], (guard: LoginUsersGuard) => {
    expect(guard).toBeTruthy();
  }));
});
