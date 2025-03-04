import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface TableColumn {
  key: string;
  label: string;
  isSortable?: boolean;
}

export interface TableAction {
  icon: string;
  tooltip?: string;
  color?: string;
  action: (row: any) => void;
}

@Component({
  selector: 'app-custom-table',
  standalone: false,
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() title: string = 'Table';
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() actions: TableAction[] = [];

  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.displayedColumns = [...this.columns.map((col) => col.key), 'actions'];
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    // Ensure paginator and sort are set correctly
    if (this.paginator && this.sort) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  // When a parent component updates an @Input() property of a child component, ngOnChanges is triggered.
  // It receives a SimpleChanges object that contains information about the changed properties
  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && !changes['data'].firstChange) {
      this.dataSource.data = this.data; // Ensure table updates when data changes
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
