import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Subject, take, takeUntil, tap } from 'rxjs';
import { StreamService } from '../../services/stream.service';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy  {
  evenFilter: number[] = []
  totalNumbersCount: number = 0;
  allStreamNumbers: number[] = [];
  isStreamCompleted: boolean = false;

  destroy$ = new Subject()

  searchedUsers: IUser[] = []
  selectedUser: IUser | null = null // Добавляем переменную для выбранного пользователя

  constructor(private streamService: StreamService){
  }

  getEvenOfFirstSeven(){
    this.evenFilter = []; 
    this.isStreamCompleted = false;
    this.streamService.numbers$.pipe(
      take(7),
      takeUntil(this.destroy$),
      tap((num:number) => {
        this.allStreamNumbers.push(num);
      }),
      filter((num: number) => num % 2 === 0),
      tap((el:number) => {
        this.evenFilter.push(el)
        this.totalNumbersCount = this.evenFilter.length;
      })
    ).subscribe({
      complete: () => {
        this.isStreamCompleted = true;
      }
    })
  }

  searchUsersByInput(query: string) {
    this.searchUsers(query);
  }

  onUserSelected(user: IUser) {
    this.selectedUser = user;
    this.searchedUsers = [user]; 
  }

  ngOnInit(): void {
    this.searchUsers('');
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  searchUsers(query: string = '') {
    // Сбрасываем выбранного пользователя при новом поиске
    if (query !== (this.selectedUser?.name || '')) {
      this.selectedUser = null;
    }
    
    this.streamService.searchUsers(query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(response => {
      this.searchedUsers = response || [];
    });
  }
}