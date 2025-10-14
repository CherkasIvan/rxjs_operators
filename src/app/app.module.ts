import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { StreamRowComponent } from './components/stream-row/stream-row.component';
import { SelectableInputComponent } from './components/selectable-input/selectable-input.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StreamRowComponent,
    SelectableInputComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule, 
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
