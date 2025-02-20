import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { IDropdownInterface } from '../../../core/models/basic.interface';

@Component({
  selector: 'app-dropdown',
  standalone: false,
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  @Input() items: IDropdownInterface[] = [];
  @Input() position: 'left' | 'right' = 'right'; // Controls dropdown alignment
  @Input() buttonLabel: string = 'Select';
  @Input() buttonIcon?: string;

  @Output() itemClick = new EventEmitter<string>();

  isOpen = false;

  constructor(private eRef: ElementRef) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  handleItemClick(item: IDropdownInterface) {
    this.itemClick.emit(item.label);
    if (item.action) {
      item.action();
    }
    this.closeDropdown();
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }
}
