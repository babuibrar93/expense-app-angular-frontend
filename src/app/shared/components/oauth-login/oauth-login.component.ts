import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { API_ENDPOINTS } from '../../../core/constants/api-endpoint.constant';

@Component({
  selector: 'app-oauth-login',
  standalone: false,
  templateUrl: './oauth-login.component.html',
  styleUrl: './oauth-login.component.css',
})
export class OauthLoginComponent {
  constructor() {}

  logininWithGoogle() {
    window.location.href = `${environment.apiUrl}/${API_ENDPOINTS.AUTH.GOOGLE}`;
  }

  logininWithFacebook() {
    window.location.href = `${environment.apiUrl}/${API_ENDPOINTS.AUTH.FACEBOOK}`;
  }

  logininWithGithub() {
    window.location.href = `${environment.apiUrl}/${API_ENDPOINTS.AUTH.GITHUB}`;
  }
}
