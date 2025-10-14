import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent, map, distinctUntilChanged, debounceTime, filter, takeUntil, Subject } from 'rxjs';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-selectable-input',
  templateUrl: './selectable-input.component.html',
  styleUrls: ['./selectable-input.component.scss']
})
export class SelectableInputComponent implements OnChanges, AfterViewInit, OnDestroy {
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;
  @Input() allUsers: IUser[] = [];
  @Output() getInputString = new EventEmitter<string>();
  @Output() userSelected = new EventEmitter<IUser>();

  noResults: boolean = false;
  showDropdown: boolean = false;
  searchValue: string = ''; 
  autoSelectedUser: IUser | null = null;
  manuallySelectedUser: IUser | null = null; 

  private isProgrammaticChange = false; 
  private isInitialLoad = true; 
  destroy$ = new Subject();

  constructor() { }

  ngAfterViewInit(): void {
    this.setupSearchObservable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['allUsers']) {
      if (this.isInitialLoad && this.allUsers.length > 0) {
        this.showDropdown = true;
        this.isInitialLoad = false;
      } else {
        this.showDropdown = this.allUsers.length > 0 && this.searchValue.length > 0;
      }
      
      this.noResults = this.allUsers.length === 0 && this.searchValue.length > 0;
      
      if (this.allUsers.length === 1 && this.searchValue.length > 0) {
        this.autoSelectedUser = this.allUsers[0];
        this.manuallySelectedUser = null; 
        this.userSelected.emit(this.autoSelectedUser);
      } else {
        this.autoSelectedUser = null;
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  private setupSearchObservable(): void {
    if (!this.searchInput) return;

    fromEvent(this.searchInput.nativeElement, 'input').pipe(
      map((event: Event) => (event.target as HTMLInputElement).value),
      map(value => value.trim().toLowerCase()),
      distinctUntilChanged(),
      debounceTime(300),
      filter(value => {
        return value.length >= 1 || value.length === 0;
      }),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => {
        if (!this.isProgrammaticChange) {
          this.searchValue = value;
          this.getInputString.emit(value);
          this.showDropdown = this.allUsers.length > 0 && value.length > 0;
          this.isInitialLoad = false;
          
          if (value.length > 0) {
            this.autoSelectedUser = null;
            this.manuallySelectedUser = null;
          }
        }
        this.isProgrammaticChange = false; 
      },
      error: (error) => {
        console.error('Search error:', error);
      }
    });
  }

  onFocus(): void {
    if (this.allUsers.length > 0) {
      this.showDropdown = true;
    }
  }

  onBlur(): void {
    setTimeout(() => {
      this.showDropdown = false;
    }, 200);
  }

  selectUser(user: IUser): void {
    this.isProgrammaticChange = true;
    
    this.searchInput!.nativeElement.value = user.name;
    this.searchValue = user.name;
    
    this.manuallySelectedUser = user;
    this.autoSelectedUser = null; 
    
    this.userSelected.emit(user);
    this.showDropdown = false;
  }

  getUserDisplayName(user: IUser): string {
    return `${user.name} (@${user.username}) - ${user.email}`;
  }

  getUserDetails(user: IUser): string {
    return `${user.phone} • ${user.company.name}`;
  }

  getUserAddress(user: IUser): string {
    return `${user.address.city}, ${user.address.street}`;
  }

  trackByUserId(index: number, user: IUser): number {
    return user.id;
  }
}