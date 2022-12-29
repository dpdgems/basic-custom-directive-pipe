import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightDirective } from 'src/directive/highlight.directive';
import { NumberDecimalDirective } from 'src/directive/number-decimal.directive';
import { ThaiDatePipe } from 'src/pipe/thai-date.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ThaiDatePipe,
    HighlightDirective,
    NumberDecimalDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
