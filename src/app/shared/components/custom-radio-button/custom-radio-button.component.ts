import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { IRadioOptions } from '../../../core/models/basic.interface';

@Component({
  selector: 'app-custom-radio-button',
  standalone: false,
  templateUrl: './custom-radio-button.component.html',
  styleUrl: './custom-radio-button.component.css',
})
export class CustomRadioButtonComponent {
  @Input() selectedValue: string = '';
  @Input() radioOptions: IRadioOptions[] = [];
  @Input() customClass: string = '';
  @Output() selectedValueChange = new EventEmitter<string>();

  onSelectionChange(value: string) {
    this.selectedValueChange.emit(value);
  }
}
