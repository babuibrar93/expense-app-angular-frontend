import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  standalone: false,
  templateUrl: './custom-modal.component.html',
  styleUrl: './custom-modal.component.css',
})
export class CustomModalComponent {
  @Input() isOpen: boolean = false;
  @Input() customClass: string = '';
  @Input() title: string = 'Modal Title';
  @Input() showCloseButton: boolean = true;
  @Input() showFooter: boolean = true;
  @Input() modalSize: 'small' | 'medium' | 'large' = 'medium';

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
