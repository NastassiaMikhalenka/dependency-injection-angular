import {NgModule, Optional, Self} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoggerOptionalService} from "./logger-optional.service";
import {LoggerSelfService} from "./logger-self.service";
import { ChildDirective } from './child.directive';
import { ParentDirective } from './parent.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildDirective,
    ParentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoggerSelfService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Self() private loggerSelf: LoggerSelfService) {
    if (this.loggerSelf) {
      this.loggerSelf.prefix = 'AppModule Prefix';
      this.loggerSelf.log('constructor init loggerSelf');
    }
  }
}
