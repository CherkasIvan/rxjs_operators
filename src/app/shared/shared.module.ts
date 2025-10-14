import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableInputComponent } from './components/selectable-input/selectable-input.component';
import { StreamRowComponent } from './components/stream-row/stream-row.component';
import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  declarations: [
    StreamRowComponent,
    SelectableInputComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StreamRowComponent,
    SelectableInputComponent,
    UserListComponent
  ]
})
export class SharedModule { }