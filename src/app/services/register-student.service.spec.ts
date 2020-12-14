import { TestBed } from '@angular/core/testing';

import { RegisterStudentService } from './register-student.service';

describe('RegisterStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterStudentService = TestBed.get(RegisterStudentService);
    expect(service).toBeTruthy();
  });
});
