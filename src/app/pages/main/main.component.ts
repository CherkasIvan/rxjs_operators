import { Component } from '@angular/core';
import { ROUTE_ANIMATIONS } from 'src/assets/animations/route.animation';
import { ChildrenOutletContexts, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  animations: [ROUTE_ANIMATIONS],
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  isMenuOpen = false;

  navigationItems = [
    { path: '/dashboard', label: 'Главная', icon: '🏠' },
    { path: '/typescript', label: 'TypeScript задания', icon: '📘' },
    { path: '/rxjs', label: 'RxJS & Observables', icon: '🔄' },
    { path: '/signals', label: 'Angular Signals', icon: '📡' },
    { path: '/ngrx', label: 'NgRx Store', icon: '🏪' },
    { path: '/combined', label: 'Комбинированные задачи', icon: '🎯' }
  ];

  constructor(
    private contexts: ChildrenOutletContexts,
    private router: Router
  ) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.closeMenu();
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}