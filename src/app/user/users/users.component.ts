import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class AllUsersComponent {
  searchQuery = '';
  modalVisible = false;
  deleteModalVisible = false;

  constructor(private readonly router: Router) {}

  columns = [
    { key: 'name', label: 'User Name', isSortable: true },
    { key: 'email', label: 'Email', isSortable: true },
    { key: 'createdAt', label: 'Created At', isSortable: true },
    { key: 'updatedAt', label: 'Updated At', isSortable: true },
  ];

  data = [
    {
      name: 'Tech Solutions',
      email: 'contact@techsolutions.com',
      phone: '+1 234 567 890',
      createdAt: '2024-01-10',
      updatedAt: '2024-02-15',
      users: 120,
    },
    {
      name: 'InnovateX',
      email: 'info@innovatex.com',
      phone: '+44 789 654 321',
      createdAt: '2023-11-05',
      updatedAt: '2024-02-20',
      users: 85,
    },
    {
      name: 'SoftThrive',
      email: 'support@softthrive.com',
      phone: '+92 300 123 4567',
      createdAt: '2023-06-18',
      updatedAt: '2024-01-30',
      users: 200,
    },
    {
      name: 'NextGen Tech',
      email: 'hello@nextgentech.com',
      phone: '+33 678 432 109',
      createdAt: '2022-12-22',
      updatedAt: '2024-02-10',
      users: 150,
    },
    {
      name: 'CloudSync',
      email: 'team@cloudsync.io',
      phone: '+49 176 987 6543',
      createdAt: '2021-08-15',
      updatedAt: '2024-01-25',
      users: 95,
    },
    {
      name: 'AI Ventures',
      email: 'contact@aiventures.ai',
      phone: '+91 98765 43210',
      createdAt: '2023-09-12',
      updatedAt: '2024-02-05',
      users: 60,
    },
  ];

  filteredUsers = [...this.data];

  actions = [
    { icon: 'edit', tooltip: 'Edit', action: (row: any) => {} },
    {
      icon: 'visibility',
      tooltip: 'View Details',
      action: (row: any) =>
        this.router.navigate(['/organization-detail'], { queryParams: { id: row.name } }),
    },
    {
      icon: 'delete',
      tooltip: 'Delete',
      color: 'text-danger',
      action: (row: any) => this.deleteOrganization(row),
    },
  ];

  closeModal() {
    this.modalVisible = false;
  }

  closeDeleteModal() {
    this.deleteModalVisible = false;
  }

  deleteOrganization(org: any) {
    console.log('Deleting:', org);
    this.deleteModalVisible = true;
  }
}
