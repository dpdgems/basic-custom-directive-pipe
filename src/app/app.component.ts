import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'basic-custom-directive/pipe';
  messages: string = '';
  caseSensitive: boolean = false
  date = new Date();
}
