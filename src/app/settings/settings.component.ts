import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  cookie: string = '';
  endpoint: string = '';

  constructor() { }

  ngOnInit(): void {
    this.cookie = this.getFromLocalStorage('session_cookie');
    this.endpoint = this.getFromLocalStorage('endpoint');
  }
  
  focusOutSessionCookie(event: any) {
    this.cookie = event.target.value;
    this.storeInLocalStorage('session_cookie', this.cookie);  
  }

  focusOutEndpoint(event: any) {
    this.endpoint = event.target.value;
    this.storeInLocalStorage('endpoint', this.endpoint);  
  }

  storeInLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getFromLocalStorage(key: string): string {
    let value = localStorage.getItem(key);
    return value === null ? "" : value;
  }


}
