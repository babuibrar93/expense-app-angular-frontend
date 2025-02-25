import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  modalVisible = false;
  loadingOrgs = false;
  loadingActivities = false;

  constructor(protected readonly router: Router) {}

  statsData = [
    { label: 'Total Organizations', value: 24, icon: '/svg/organization.svg' },
    { label: 'Org Admins', value: 12, icon: '/svg/admin.svg' },
    { label: 'Total Users', value: 200, icon: '/svg/users.svg' },
    { label: 'Global Roles', value: 15, icon: '/svg/role.svg' },
  ];

  systemOverview = [
    { label: 'Active Organizations', value: 20, icon: '/svg/organization.svg' },
    { label: 'Pending Requests', value: 5, icon: '/svg/pending.svg' },
    { label: 'Active Users', value: 180, icon: '/svg/user.svg' },
    { label: 'Banned Users', value: 3, icon: '/svg/user.svg' },
  ];

  recentOrgs = [
    { name: 'Tech Corp', date: '2025-02-21' },
    { name: 'Data Solutions', date: '2025-02-20' },
    { name: 'SoftWorks', date: '2025-02-18' },
  ];

  activities = [
    { text: 'New user registered', time: '2 hours ago', icon: '/svg/user.svg' },
    { text: 'Organization updated', time: '1 day ago', icon: '/svg/organization.svg' },
    { text: 'Role permissions changed', time: '3 days ago', icon: '/svg/role.svg' },
  ];

  openModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }

  handleViewOrganization(org: any) {
    this.router.navigate(['/organization-detail'], { queryParams: { id: org.name } });
  }
}
