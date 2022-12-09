import { TestBed } from '@angular/core/testing';

import { ContenuServiceTsService } from './contenu.service.ts.service';

describe('ContenuServiceTsService', () => {
  let service: ContenuServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContenuServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
