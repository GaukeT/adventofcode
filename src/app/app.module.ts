import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    SettingsMenuComponent,
    SettingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    AppRoutingModule,
    MatInputModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
