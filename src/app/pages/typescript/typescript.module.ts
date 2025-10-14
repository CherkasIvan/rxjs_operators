import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TypeScriptComponent } from './typescript.component';

const routes: Routes = [
  { path: '', component: TypeScriptComponent }
];

@NgModule({
  declarations: [TypeScriptComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TypeScriptModule { }