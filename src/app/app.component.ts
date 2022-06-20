import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'adventofcode';
  today = new Date();

  selectedYear:number = 0;
  selectedDay:number  = 0;
}
