/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { NavService } from './nav.service';

describe('Service: Navbar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavService]
    });
  });

  it('should ...', inject([NavService], (service: NavService) => {
    expect(service).toBeTruthy();
  }));
});
