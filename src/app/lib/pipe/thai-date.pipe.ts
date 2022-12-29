import { Pipe, PipeTransform } from '@angular/core';
import { longThaiMonths, shortThaiMonths, thaiDays } from './thai-date';

@Pipe({
  name: 'thaiDate',
})
export class ThaiDatePipe implements PipeTransform {
  transform(
    value: Date,
    format?: 'short' | 'medium' | 'long' | 'full' | 'datetime' | 'longdatetime'
  ): string {
    // [day, date, month, year, hour, minute]
    const inputDate = [
      value.getDay(),
      value.getDate(),
      value.getMonth(),
      value.getFullYear() + 543,
      value.getHours(),
      value.getMinutes(),
    ];
    let outputDate: string = '';

    const shortDate = `${inputDate[1]}/${inputDate[2] + 1}/${inputDate[3]}`;
    const mediumDate = `${inputDate[1]} ${shortThaiMonths[inputDate[2]]} 
      ${inputDate[3]}`;
    const longDate = `${inputDate[1]} ${longThaiMonths[inputDate[2]]} 
      พ.ศ. ${inputDate[3]}`;
    const fullDate = `วัน ${thaiDays[inputDate[0]]} ที่ ${inputDate[1]} 
      เดือน ${longThaiMonths[inputDate[2]]} พ.ศ. ${inputDate[3]}`;
    const time = `${inputDate[4]}.${inputDate[5]} น.`;

    if (value instanceof Date && !isNaN(value.valueOf())) {
      if (format === 'short') {
        outputDate = shortDate;
      } else if (format === 'medium') {
        outputDate = mediumDate;
      } else if (format === 'long') {
        outputDate = longDate;
      } else if (format === 'full') {
        outputDate = fullDate;
      } else if (format === 'datetime') {
        outputDate = `${mediumDate} ${time}`;
      } else if (format === 'longdatetime') {
        outputDate = `${longDate} ${time}`;
      }
    } else {
      // invalid
      return '';
    }
    return outputDate;
  }
}
