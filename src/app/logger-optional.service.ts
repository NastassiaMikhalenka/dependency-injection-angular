import { Injectable } from '@angular/core';

@Injectable()
export class LoggerOptionalService {

  constructor() { }

  log(message: string) {
    console.log(message);
  }
}
