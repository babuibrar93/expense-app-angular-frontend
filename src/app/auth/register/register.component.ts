import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../core/constants/api-endpoint.constant';
import { ApiService } from '../../core/services/api.service';
import { FormService } from '../../core/services/form.service';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup; // Declare the form group
  isLoading$!: Observable<boolean>;

  private readonly formConfig = {
    fullName: { value: '', validators: [Validators.required, Validators.minLength(6)] },
    email: { value: '', validators: [Validators.required, Validators.email] },
    password: { value: '', validators: [Validators.required, Validators.minLength(6)] },
  };

  constructor(
    private router: Router,
    private formService: FormService,
    private apiService: ApiService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    // Initialize the form with the provided configuration
    this.initializeForm();
    this.isLoading$ = this.loadingService.loading$;
  }

  private initializeForm(): void {
    this.registerForm = this.formService.initializeForm(this.formConfig);
  }

  control(controlName: string) {
    return this.formService.controls[controlName];
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.formService.markFormGroupTouched(this.registerForm);
      return;
    }

    this.apiService
      .post(API_ENDPOINTS.AUTH.REGISTER, this.registerForm.value)
      .subscribe(() => this.router.navigate(['/auth/login']));
  }
}
