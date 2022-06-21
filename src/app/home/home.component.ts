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

  part1: number = 0;
  part2: number = 0;
  
  part1Verified: boolean = false;
  part2Verified: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.TryLocalStorage();
  }

  selectedDate(newDate: selectedDate) {
    this.selectedYear = newDate.year;
    this.selectedDay = newDate.day;

    this.TryLocalStorage();
  }

  TryLocalStorage(): void {
    /* TODO: 
      idea 1: button to call endpoint to solve solution. returns answer and time passed. (use endpoint settings)
      idea 2: to cache answers in local storage, when date switched, show answers from there.
      idea 3: indication if answer is verified by AOC
      idea 4: post answer to AOC
    */ 
      
    // mock data
    this.part1 = Math.floor(Math.random() * 1_000_000_000 + 1);
    this.part2 = Math.floor(Math.random() * 1_000_000 + 1);

    this.part1Verified = Math.floor(Math.random() * 10) < 5;
    this.part2Verified = Math.floor(Math.random() * 10) < 5;
  }
}
