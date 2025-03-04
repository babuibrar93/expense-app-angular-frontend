import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CustomAutocompleteComponent } from './components/custom-autocomplete/custom-autocomplete.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomDatePickerComponent } from './components/custom-date-picker/custom-date-picker.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomLoaderComponent } from './components/custom-loader/custom-loader.component';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { CustomRadioButtonComponent } from './components/custom-radio-button/custom-radio-button.component';
import { CustomSlideToggleComponent } from './components/custom-slide-toggle/custom-slide-toggle.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { OauthLoginComponent } from './components/oauth-login/oauth-login.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
  declarations: [
    DropdownComponent,
    CustomButtonComponent,
    CustomInputComponent,
    CustomRadioButtonComponent,
    CustomSlideToggleComponent,
    CustomModalComponent,
    CustomAutocompleteComponent,
    CustomDatePickerComponent,
    CustomLoaderComponent,
    OauthLoginComponent,
    CustomTableComponent,
  ],
  exports: [
    DropdownComponent,
    CustomButtonComponent,
    CustomInputComponent,
    CustomRadioButtonComponent,
    CustomSlideToggleComponent,
    CustomModalComponent,
    CustomAutocompleteComponent,
    CustomDatePickerComponent,
    CustomLoaderComponent,
    OauthLoginComponent,
    CustomTableComponent,
  ],
})
export class SharedModule {}
