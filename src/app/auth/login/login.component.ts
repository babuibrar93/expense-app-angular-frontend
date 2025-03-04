import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../core/constants/api-endpoint.constant';
import { IApiResponse } from '../../core/models/basic.interface';
import { ApiService } from '../../core/services/api.service';
import { FormService } from '../../core/services/form.service';
import { LoadingService } from '../../core/services/loading.service';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading$!: Observable<boolean>;

  constructor(
    private readonly router: Router,
    private readonly formService: FormService,
    private readonly apiService: ApiService,
    private readonly loadingService: LoadingService,
    private readonly localStorageService: LocalStorageService
  ) {}

  private readonly formConfig = {
    email: {
      value: 'superadmin@example.com',
      disabled: false,
      validators: [Validators.required, Validators.email],
    },
    password: {
      value: 'SuperAdmin@123',
      disabled: false,
      validators: [Validators.required, Validators.minLength(6)],
    },
  };

  ngOnInit(): void {
    this.initializeForm();
    this.isLoading$ = this.loadingService.loading$;
  }

  private initializeForm(): void {
    this.loginForm = this.formService.initializeForm(this.formConfig);
  }

  control(controlName: string) {
    return this.formService.getControl(this.loginForm, controlName);
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.formService.markAllAsTouched(this.loginForm);
      return;
    }

    this.apiService
      .post<IApiResponse>(API_ENDPOINTS.AUTH.LOGIN, this.loginForm.value)
      .subscribe((response) => {
        if (response?.data?.token) {
          this.localStorageService.setItem('user', response.data.user);
          this.localStorageService.setItem('token', response.data.token);
          this.router.navigate(['/']);
        }
      });
  }
}
