import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'alphabet';
  today = new Date();

  selectedYear:number = 0;
  selectedDay:number  = 0;
  years: number[] = [];
  days: number[] = [];

  ngOnInit(): void {
    console.log(new Date())
    this.determineAvailableYears();
    this.determineAvailableDays();
  }

  determineAvailableYears(): void {
    let latestYear = this.getLatestYear();
    this.selectedYear = latestYear;
    for (let i = 2016; i <= latestYear; i++) {
      this.years.push(i);
    }
  }

  determineAvailableDays() : void {
    this.days = [];
    let latestDay = this.getLatestDay();
    this.selectedDay = latestDay;
    for (let i = 1; i <= latestDay; i++) {
      this.days.push(i);
    }

    console.log(this.days);
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
