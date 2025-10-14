import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgrxComponent } from './ngrx.component';

const routes: Routes = [
  { path: '', component: NgrxComponent }
];

@NgModule({
  declarations: [NgrxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NgrxModule { }