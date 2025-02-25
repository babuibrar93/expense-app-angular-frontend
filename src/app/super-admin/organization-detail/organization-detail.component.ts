import { Component } from '@angular/core';
import {
  TableAction,
  TableColumn,
} from '../../shared/components/custom-table/custom-table.component';

@Component({
  selector: 'app-organization-detail',
  standalone: false,
  templateUrl: './organization-detail.component.html',
  styleUrl: './organization-detail.component.css',
})
export class OrganizationDetailComponent {
  modalVisible = false;
  addUserModalVisible = false;
  deleteModalVisible = false;
  deleteOrganizationModalVisible = false;

  userOptions = ['John Doe', 'Jane Smith', 'Ali Khan', 'Sara Ahmed'];
  roleOptions = ['Admin', 'Manager', 'Employee'];

  assignedUsers: { name: string; role: string; id: number }[] = [];
  selectedUser: string = '';
  selectedRole: string = '';

  onUserSelect(user: string) {
    this.selectedUser = user;
  }

  onRoleSelect(role: string) {
    this.selectedRole = role;
  }

  openModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }

  closeDeleteModal() {
    this.deleteModalVisible = false;
  }

  openOrganizationDeleteModal() {
    this.deleteOrganizationModalVisible = true;
  }

  closeOrganizationDeleteModal() {
    this.deleteOrganizationModalVisible = false;
  }

  openAddUserModal() {
    this.addUserModalVisible = true;
  }

  closeAddUserModal() {
    this.addUserModalVisible = false;
  }

  addUserRole() {
    if (this.selectedUser && this.selectedRole) {
      this.assignedUsers.push({
        name: this.selectedUser,
        role: this.selectedRole,
        id: Date.now(),
      });
      this.selectedUser = '';
      this.selectedRole = '';
    }
  }

  removeUser(userId: number) {
    this.assignedUsers = this.assignedUsers.filter((user) => user.id !== userId);
  }

  submitOrganization() {
    console.log('Organization Created!', this.assignedUsers);
  }

  columns: TableColumn[] = [
    { key: 'name', label: 'Name', isSortable: true },
    { key: 'email', label: 'Email', isSortable: true },
    { key: 'role', label: 'Role', isSortable: true },
    { key: 'createdAt', label: 'Created At', isSortable: true },
    { key: 'updatedAt', label: 'Updated At', isSortable: true },
  ];

  data = [
    {
      name: 'John Doe',
      email: 'john@techsolutions.com',
      role: 'Admin',
      createdAt: '2024-02-10 10:30:00',
      updatedAt: '2024-02-15 12:45:00',
    },
    {
      name: 'Jane Smith',
      email: 'jane@techsolutions.com',
      role: 'Manager',
      createdAt: '2024-01-25 09:15:00',
      updatedAt: '2024-02-12 14:20:00',
    },
    {
      name: 'Mike Johnson',
      email: 'mike@techsolutions.com',
      role: 'Member',
      createdAt: '2024-02-01 08:45:00',
      updatedAt: '2024-02-14 11:10:00',
    },
    {
      name: 'Sarah Brown',
      email: 'sarah@techsolutions.com',
      role: 'Member',
      createdAt: '2024-01-20 15:30:00',
      updatedAt: '2024-02-10 09:05:00',
    },
    {
      name: 'David Wilson',
      email: 'david@techsolutions.com',
      role: 'Member',
      createdAt: '2024-02-05 13:20:00',
      updatedAt: '2024-02-16 16:00:00',
    },
    {
      name: 'Emily Davis',
      email: 'emily@techsolutions.com',
      role: 'Manager',
      createdAt: '2024-01-18 10:55:00',
      updatedAt: '2024-02-14 17:30:00',
    },
    {
      name: 'Robert White',
      email: 'robert@techsolutions.com',
      role: 'Member',
      createdAt: '2024-01-10 14:00:00',
      updatedAt: '2024-02-11 18:40:00',
    },
    {
      name: 'Lisa Green',
      email: 'lisa@techsolutions.com',
      role: 'Manager',
      createdAt: '2024-02-02 09:40:00',
      updatedAt: '2024-02-13 14:50:00',
    },
    {
      name: 'James Anderson',
      email: 'james@techsolutions.com',
      role: 'Admin',
      createdAt: '2024-01-22 11:10:00',
      updatedAt: '2024-02-10 15:20:00',
    },
    {
      name: 'Olivia Martinez',
      email: 'olivia@techsolutions.com',
      role: 'Member',
      createdAt: '2024-02-04 08:30:00',
      updatedAt: '2024-02-15 10:15:00',
    },
    {
      name: 'William Taylor',
      email: 'william@techsolutions.com',
      role: 'Member',
      createdAt: '2024-01-29 12:20:00',
      updatedAt: '2024-02-14 17:50:00',
    },
    {
      name: 'Sophia Thomas',
      email: 'sophia@techsolutions.com',
      role: 'Admin',
      createdAt: '2024-01-19 14:30:00',
      updatedAt: '2024-02-13 19:10:00',
    },
  ];

  actions: TableAction[] = [
    { icon: 'edit', tooltip: 'Edit', action: (row) => this.editRow(row) },
    {
      icon: 'delete',
      tooltip: 'Delete',
      color: 'text-danger',
      action: (row) => this.deleteRow(row),
    },
  ];

  editRow(row: any) {
    console.log('Edit:', row);
  }

  deleteRow(row: any) {
    console.log('Delete:', row);
    this.deleteModalVisible = true;
  }
}
