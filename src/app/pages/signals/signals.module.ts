import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignalsComponent } from './signals.component';

const routes: Routes = [
  { path: '', component: SignalsComponent }
];

@NgModule({
  declarations: [SignalsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SignalsModule { }