import {Component, Optional, Self, SkipSelf} from '@angular/core';
import {LoggerOptionalService} from "./logger-optional.service";
import {LoggerSelfService} from "./logger-self.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggerSelfService] // for @Self
})
export class AppComponent {
  public title = 'di-angular';

  // @Optional Parameter decorator to be used on constructor parameters,
  // which marks the parameter as being an optional dependency.
  // The DI framework provides null if the dependency is not found.

  // @Self Parameter decorator to be used on constructor parameters,
  // which tells the DI framework to start dependency resolution from
  // the local injector.

  // @SkipSelf Parameter decorator to be used on constructor parameters,
  // which tells the DI framework to start dependency resolution from
  // the parent injector. Resolution works upward through the injector
  // hierarchy, so the local injector is not checked for a provider.
  constructor(@Optional() private loggerOptional: LoggerOptionalService, @Self() private loggerSelf: LoggerSelfService, @SkipSelf() private parentLoggerSelf: LoggerSelfService) {
    if(this.loggerOptional) {
      this.loggerOptional.log('constructor init loggerOptional');
    }

    if(this.loggerSelf) {
      this.loggerSelf.prefix = 'AppComponent Prefix';
      this.loggerSelf.log('constructor init loggerSelf');
    }

    if(this.parentLoggerSelf){
      this.parentLoggerSelf.log('constructor init parentLoggerSelf');
    }
  }
}

