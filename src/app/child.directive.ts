import {Directive, Host} from '@angular/core';
import {LoggerSelfService} from "./logger-self.service";

@Directive({
  selector: '[appChild]'
})
export class ChildDirective {

  constructor(@Host() private logger: LoggerSelfService) {
    this.logger.log('Directive constructor');
  }

}
