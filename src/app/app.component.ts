import { Component } from '@angular/core';
import { selectedDate } from '../app/date-picker/date-picker.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'adventofcode';
  today = new Date();

  selectedYear: number = 0;
  selectedDay: number  = 0;

  selectedDate(newDate: selectedDate) {
    this.selectedYear = newDate.year;
    this.selectedDay = newDate.day;
  }
}
