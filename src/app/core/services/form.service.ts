import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IFormControl } from '../models/basic.interface';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  controls: IFormControl = {};
  constructor(private fb: FormBuilder) {}

  initializeForm(formConfig: any): FormGroup {
    this.controls = {};
    for (const key of Object.keys(formConfig)) {
      const config = formConfig[key];
      this.controls[key] = new FormControl(config.value || '', config.validators || []);
    }
    return this.fb.group(this.controls);
  }

  markFormGroupTouched(group: FormGroup) {
    Object.values(group.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
