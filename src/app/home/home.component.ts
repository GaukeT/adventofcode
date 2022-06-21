import { Component, OnInit } from '@angular/core';
import { selectedDate } from '../date-picker/date-picker.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedYear: number = 0;
  selectedDay: number  = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selectedDate(newDate: selectedDate) {
    this.selectedYear = newDate.year;
    this.selectedDay = newDate.day;
  }
}
