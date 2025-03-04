import {
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IAutoCompleOptions } from '../../../core/models/basic.interface';

@Component({
  selector: 'app-custom-autocomplete',
  standalone: false,
  templateUrl: './custom-autocomplete.component.html',
  styleUrls: ['./custom-autocomplete.component.css'],
})
export class CustomAutocompleteComponent implements OnChanges {
  @Input() className: string = '';
  @Input() placeholder: string = 'Search...';
  @Input() options: IAutoCompleOptions[] = [];
  @Output() selectedOption = new EventEmitter<IAutoCompleOptions>();

  myControl = new FormControl('');
  filteredOptions!: Observable<IAutoCompleOptions[]>;

  @ViewChild(MatAutocompleteTrigger) autocompleteTrigger!: MatAutocompleteTrigger;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      map((value) => this._filter(value || ''))
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options']) {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        distinctUntilChanged(),
        map((value) => this._filter(value || ''))
      );
    }
  }

  private _filter(value: string): IAutoCompleOptions[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) => option.value.toLowerCase().includes(filterValue));
  }

  onSelection(optionValue: string) {
    const selected = this.options.find((opt) => opt.value === optionValue);
    if (selected) {
      this.selectedOption.emit(selected);
    }
  }
}
