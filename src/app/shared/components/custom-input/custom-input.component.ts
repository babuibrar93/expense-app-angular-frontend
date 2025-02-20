import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: false,
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() isTextArea: boolean = false;
  @Input() formControl!: FormControl;

  showPassword: boolean = false;

  constructor() {}

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string | null): void {
    if (value !== null) {
      this.formControl?.setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (this.formControl) {
      isDisabled ? this.formControl.disable() : this.formControl.enable();
    }
  }

  // Compute error message dynamically
  get errorMessage(): string {
    if (!this.formControl || !this.formControl.touched || this.formControl.valid) return '';

    if (this.formControl.hasError('required')) {
      return `${this.label} is required.`;
    }
    if (this.formControl.hasError('minlength')) {
      return `${this.label} must be at least ${this.formControl.errors?.['minlength'].requiredLength} characters.`;
    }
    if (this.formControl.hasError('email')) {
      return 'Please enter a valid email address.';
    }
    return 'Invalid input.';
  }

  // Check if there's an error to display
  get showError(): boolean {
    return this.formControl && this.formControl.touched && this.formControl.invalid;
  }
}
