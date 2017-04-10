/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComboserviceService } from './comboservice.service';

describe('ComboserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComboserviceService]
    });
  });

  it('should ...', inject([ComboserviceService], (service: ComboserviceService) => {
    expect(service).toBeTruthy();
  }));
});
