import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Pipe({ name: 'mypipe' })
export class Mypipe implements PipeTransform {
  transform(date: Date | string, day: number, format: string = 'yyyy-MM-dd') {
    date = new Date(date);
    date.setDate(date.getDate() - day);
    return new DatePipe('en-US').transform(date, format);
  }
}

@Pipe({
  name: 'square',
})
export class SquarePipe implements PipeTransform {
  transform(value: number): number {
    return value * value;
  }
}
