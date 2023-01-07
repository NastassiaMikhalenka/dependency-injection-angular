import {Directive, Optional, Self} from '@angular/core';
import {LoggerSelfService} from "./logger-self.service";

@Directive({
  selector: '[appParent]',
  providers: [LoggerSelfService]
})
export class ParentDirective {

  constructor(@Optional() @Self() private logger: LoggerSelfService) {
    if(this.logger) {
      this.logger.prefix = 'ParentDirective Prefix';
    }
  }

}
