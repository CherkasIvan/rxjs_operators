import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CombinedComponent } from './combined.component';

const routes: Routes = [
  { path: '', component: CombinedComponent }
];

@NgModule({
  declarations: [CombinedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CombinedModule { }