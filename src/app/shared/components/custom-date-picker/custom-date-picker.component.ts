import { Component, Input, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-date-picker',
  standalone: false,
  templateUrl: './custom-date-picker.component.html',
  styleUrls: ['./custom-date-picker.component.css'],
})
export class CustomDatePickerComponent {
  @Input() customClass: string = '';
  @Input() label: string = 'Choose a date'; // Default label

  @ViewChild('datePicker') datePicker!: MatDatepicker<Date>;
  @ViewChild('dateRangePicker') dateRangePicker!: MatDateRangePicker<Date>;

  singleDateControl = new FormControl();
  startDateControl = new FormControl();
  endDateControl = new FormControl();
}
