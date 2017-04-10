import { Injectable } from '@angular/core';

@Injectable()
export class LoginserviceService {

  constructor() { }
  send(data) {
    console.log("sending the parameter to server : "+ data);
  } 

  get() {
    console.log("retrieving the parameter from server");
  }
}
