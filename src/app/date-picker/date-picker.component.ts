import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  selectedYear:number = 0;
  selectedDay:number  = 0;
  years: number[] = [];
  days: number[] = [];

  ngOnInit(): void {
    this.determineAvailableYears();
    this.selectedYear = this.getLatestYear();
    this.determineAvailableDays();
    this.selectedDay = this.getLatestDay();
  }

  determineAvailableYears(): void {
    let latestYear = this.getLatestYear();
    for (let i = 2016; i <= latestYear; i++) {
      this.years.push(i);
    }
  }

  determineAvailableDays() : void {
    this.days = [];
    let latestDay = this.getLatestDay();
    for (let i = 1; i <= latestDay; i++) {
      this.days.push(i);
    }
  }

  getLatestYear(): number {
    let year = (new Date()).getFullYear();
    let month = (new Date()).getMonth();

    let latest = month >= 12 ? year : year - 1;
    return latest;
  }

  getLatestDay(): number {
    var latest = 25;
    let month = (new Date()).getMonth();
    let day = (new Date()).getDate();

    if (this.selectedYear === this.getLatestYear()) {
      latest = month >= 12 ? day : 25;
    }

    return latest;
  }

  setValue(value: number, select: string): void {
    if (select === "day") {
      this.selectedDay = value;
    }

    if (select === "year") {
      this.selectedYear = value;
      this.determineAvailableDays();
    }
  }
}
