import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-autocomplete',
  standalone: false,
  templateUrl: './custom-autocomplete.component.html',
  styleUrls: ['./custom-autocomplete.component.css'],
})
export class CustomAutocompleteComponent {
  @Input() placeholder: string = 'Search...';
  @Input() options: string[] = [];
  @Input() className: string = '';
  @Output() selectedOption = new EventEmitter<string>();

  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;

  @ViewChild(MatAutocompleteTrigger) autocompleteTrigger!: MatAutocompleteTrigger;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) => option.toLowerCase().includes(filterValue));
  }

  onSelection(option: string) {
    this.selectedOption.emit(option);
  }
}
