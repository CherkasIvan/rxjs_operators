// user-list.component.ts
import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users: IUser[] = [];
  @Input() title: string = 'Пользователи';
}