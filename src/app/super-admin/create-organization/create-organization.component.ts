import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormService } from '../../core/services/form.service';
import { ApiService } from '../../core/services/api.service';
import { LoadingService } from '../../core/services/loading.service';
import { API_ENDPOINTS } from '../../core/constants/api-endpoint.constant';
import { IApiResponse } from '../../core/models/basic.interface';
import { IOrganization } from '../../core/models/organization.interface';

@Component({
  selector: 'app-create-organization',
  standalone: false,
  templateUrl: './create-organization.component.html',
  styleUrl: './create-organization.component.css',
})
export class CreateOrganizationComponent implements OnInit, OnChanges {
  organizationForm!: FormGroup;
  isLoading$!: Observable<boolean>;

  @Input() organizationDetail!: IOrganization; // Receiving data from parent
  @Output() formSubmitted = new EventEmitter<void>(); // Event emitter → Notifies parent when form is successfully submitted.

  constructor(
    private readonly formService: FormService,
    private readonly apiService: ApiService,
    private readonly loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.isLoading$ = this.loadingService.loading$;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['organizationDetail']?.currentValue) {
      this.patchFormValues();
    }
  }

  private readonly formConfig = {
    name: {
      value: '',
      disabled: false,
      validators: [Validators.required, Validators.minLength(6)],
    },
    email: { value: '', disabled: false, validators: [Validators.required, Validators.email] },
    phone: { value: '', disabled: false, validators: [Validators.required] },
    address: { value: '', disabled: false },
    description: { value: '', disabled: false },
  };

  private patchFormValues(): void {
    if (this.organizationForm) {
      this.organizationForm.patchValue({
        name: this.organizationDetail?.Name ?? '',
        email: this.organizationDetail?.Email ?? '',
        phone: this.organizationDetail?.Phone ?? '',
        address: this.organizationDetail?.Address ?? '',
        description: this.organizationDetail?.Description ?? '',
      });
    }
  }

  private initializeForm(): void {
    this.organizationForm = this.formService.initializeForm(this.formConfig);
    this.patchFormValues();
  }

  control(controlName: string) {
    return this.formService.getControl(this.organizationForm, controlName);
  }

  saveOrganization(): void {
    if (this.organizationForm.invalid) {
      this.organizationForm.markAllAsTouched();
      return;
    }

    const isUpdating = !!this.organizationDetail?.Id;
    const endpoint = isUpdating
      ? `${API_ENDPOINTS.ORGANIZATION.UPDATE_ORGANIZATION}/${this.organizationDetail?.Id}`
      : API_ENDPOINTS.ORGANIZATION.CREATE_ORGANIZATION;

    this.apiService[isUpdating ? 'update' : 'post']<IApiResponse>(
      endpoint,
      this.organizationForm.value
    ).subscribe(() => {
      this.formSubmitted.emit();
      if (!isUpdating) this.organizationForm.reset();
    });
  }
}
