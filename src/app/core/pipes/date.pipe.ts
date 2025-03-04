import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  pure: true, // Keeps it optimized
})
@Injectable({
  providedIn: 'root', // Makes it available for DI
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string, format: 'date' | 'datetime' = 'date'): string {
    if (!value) return '';

    const [date, time] = value.split('T');
    return format === 'datetime' ? `${date} ${time.split('.')[0]}` : date;
  }
}
