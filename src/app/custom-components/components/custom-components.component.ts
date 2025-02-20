import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-components',
  standalone: false,
  templateUrl: './custom-components.component.html',
  styleUrl: './custom-components.component.css',
})
export class CustomComponentsComponent {
  selectedOption: string = '';
  toggleState: boolean = false;
  modalVisible: boolean = false;

  radioOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  onValueChange(value: string) {
    this.selectedOption = value;
  }

  handleSave() {}

  favoriteFoodControl = new FormControl('Sushi');
  commentControl = new FormControl('');

  handleClicked(event: any) {}

  onToggleChange(value: boolean) {}

  openModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }

  onOptionSelect(value: string) {}
}
