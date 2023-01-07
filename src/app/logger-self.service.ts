import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerSelfService {

  public prefix: string = 'Prefix LoggerSelfService'

  constructor() { }

  log(message: string) {
    console.log(`${this.prefix}: ${message}`);
  }
}
