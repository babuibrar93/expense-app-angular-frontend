import { FormControl } from '@angular/forms';

export interface IApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: any;
  token?: string;
}

export interface IDropdownInterface {
  label: string;
  icon?: string;
  action?: () => void;
  separator?: boolean;
  color?: string;
}

export interface IRadioOptions {
  value: string;
  label: string;
  element?: string;
}

export interface ISnackbar {
  duration: number;
  direction: string;
  verticalPosition: string;
  horizontalPosition: string;
}

export interface IFormControl {
  [key: string]: FormControl;
}

export interface IAutoCompleOptions {
  id: string;
  value: string;
}
