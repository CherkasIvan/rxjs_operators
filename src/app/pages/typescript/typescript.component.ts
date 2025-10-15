import { Component, OnInit } from '@angular/core';
import { StatusesEnum } from 'src/app/enums/status.enum';
import { TVariable } from 'src/app/models/ts/variable.type';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypeScriptComponent implements OnInit {
  public age: number = 30;
  public name: string = 'JV_13';
  public isActive: boolean = false;
  public scores: number[] = [30, 17, 24, 69];
  public statuses = StatusesEnum

  public union!: string | number

  public variables: TVariable = {
    age: 30,
    name: 'JV_13',
    isActive: false,
    scores: [30, 17, 24, 69]
  }

  public user: [string, number, boolean] = ['John', 35, this.isActive]

  public getType(value: any): string {
    if (Array.isArray(value)) {
      return 'array';
    }
    return typeof value;
  }


  public createTupleString(user: [string, number, boolean]) {
    return `name: ${user[0]} age: ${user[1]} active: ${user[2]}`
  }

  constructor() { }

  ngOnInit(): void {
  }

  public getStatusCode(status: StatusesEnum): number {
    return status;
  }

  public getStatusType(status: StatusesEnum): string {
    return this.statuses[status];
  }

  public returnValueType(value: string | number): string | number {
    return value
  }
}
