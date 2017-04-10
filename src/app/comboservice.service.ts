import { Injectable } from '@angular/core';

@Injectable()
export class ComboserviceService {

  constructor() { }
  dropdown() {
    return ["Mr", "Mrs", "Ms"];
  }
}
