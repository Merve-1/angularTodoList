import { TestBed } from '@angular/core/testing';

import { TodoxService } from './todox.service';

describe('TodoxService', () => {
  let service: TodoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
