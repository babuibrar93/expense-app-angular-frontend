import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private fb: FormBuilder) {}

  // Initialize form dynamically
  initializeForm(config: any): FormGroup {
    const formGroup: { [key: string]: FormControl } = {};
    Object.keys(config).forEach((key) => {
      formGroup[key] = new FormControl(
        config[key].value || '',
        config[key].validators || []
      );
    });

    return this.fb.group(formGroup);
  }

  // Mark all fields as touched
  markAllAsTouched(form: FormGroup) {
    Object.keys(form.controls).forEach((key) => {
      form.get(key)?.markAsTouched();
    });
  }

  // Reset form
  resetForm(form: FormGroup) {
    form.reset();
  }

  // Get form control dynamically
  getControl(form: FormGroup, controlName: string): FormControl {
    return form.get(controlName) as FormControl;
  }
}
