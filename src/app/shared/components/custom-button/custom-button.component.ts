import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: false,
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
})
export class CustomButtonComponent {
  @Input() label: string = ''; // Button text
  @Input() type: string = ''; // Button type
  @Input() disabled: boolean = false; // Disable button
  @Input() startIcon: string = '';
  @Input() endIcon: string = '';
  @Input() customClass: string = '';
  @Input() isLoading: boolean = false;

  @Output() clicked = new EventEmitter<Event>(); // Click event

  // Default button styles
  defaultClasses = 'rounded-md flex items-center transition';

  onClick(event: Event) {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
