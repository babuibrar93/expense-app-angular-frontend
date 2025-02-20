import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-custom-slide-toggle',
  standalone: false,
  templateUrl: './custom-slide-toggle.component.html',
  styleUrl: './custom-slide-toggle.component.css',
})
export class CustomSlideToggleComponent {
  @Input() value: boolean = false;
  @Input() label: string = '';
  @Input() customClass: string = '';
  @Input() disabled: boolean = false;
  @Input() hideIcon: boolean = false;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Output() valueChange = new EventEmitter<boolean>();

  onToggleChange(event: MatSlideToggleChange) {
    this.valueChange.emit(event.checked);
  }
}
