import { TestBed } from '@angular/core/testing';

import { HttpUsersService } from './http-users.service';

describe('HttpUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpUsersService = TestBed.get(HttpUsersService);
    expect(service).toBeTruthy();
  });
});
