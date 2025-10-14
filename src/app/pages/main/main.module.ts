import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { 
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
      },
      { 
        path: 'dashboard', 
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      { 
        path: 'typescript', 
        loadChildren: () => import('../typescript/typescript.module').then(m => m.TypeScriptModule)
      },
      { 
        path: 'rxjs', 
        loadChildren: () => import('../rxjs/rxjs.module').then(m => m.RxJsModule)
      },
      { 
        path: 'signals', 
        loadChildren: () => import('../signals/signals.module').then(m => m.SignalsModule)
      },
      { 
        path: 'ngrx', 
        loadChildren: () => import('../ngrx/ngrx.module').then(m => m.NgrxModule)
      },
      { 
        path: 'combined', 
        loadChildren: () => import('../combined/combined.module').then(m => m.CombinedModule)
      }
    ]
  }
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule 
  ]
})
export class MainModule { }