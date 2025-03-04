import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_ENDPOINTS } from '../../core/constants/api-endpoint.constant';
import { IApiResponse } from '../../core/models/basic.interface';
import { IOrganization } from '../../core/models/organization.interface';
import { ISuperAdminStats } from '../../core/models/super-admin-dashboard.interface';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  superAdminStats: any = [];
  modalVisible = false;
  loadingOrgs = false;
  loadingActivities = false;
  recentOrganizations: IOrganization[] = [];

  constructor(public readonly router: Router, private readonly apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchAllOrganizations();
    // this.fetchSuperAdminStats();
  }

  /** Fetches the list of organizations */
  private fetchAllOrganizations(): void {
    this.loadingOrgs = true;
    this.apiService
      .get<IApiResponse>(API_ENDPOINTS.ORGANIZATION.FETCH_ALL_ORGANIZATION_USERS, {
        page: 1,
        limit: 3,
        sortBy: 'CreatedAt',
        order: 'DESC',
      })
      .subscribe((response) => {
        this.recentOrganizations = response.data.organizations;
        this.loadingOrgs = false;
        // this.fetchSuperAdminStats();
      });
  }

  // private fetchSuperAdminStats() {
  //   this.apiService
  //     .get<IApiResponse>(API_ENDPOINTS.USER.SUPER_ADMIN_STATS)
  //     .subscribe((response) => {
  //       this.superAdminStats = this.superAdminStatsData(response?.data);
  //     });
  // }

  private superAdminStatsData(data: ISuperAdminStats) {
    return [
      {
        label: 'Total Users',
        value: data.totalOrganizations || 0,
        icon: '/svg/organization.svg',
      },
      {
        label: 'Org Admins',
        value: data.totalOrgAdmins || 0,
        icon: '/svg/admin.svg',
      },
      {
        label: 'Global Roles',
        value: data.totalUsers || 0,
        icon: '/svg/users.svg',
      },
      {
        label: 'Total Expense',
        value: data.totalGlobalRoles || 0,
        icon: '/svg/role.svg',
      },
      {
        label: 'Total Revenue',
        value: data.totalGlobalRoles || 0,
        icon: '/svg/role.svg',
      },
      {
        label: 'Approved Expense',
        value: data.totalGlobalRoles || 0,
        icon: '/svg/role.svg',
      },
      {
        label: 'Pending Expense',
        value: data.totalGlobalRoles || 0,
        icon: '/svg/role.svg',
      },
      {
        label: 'Rejected Expense',
        value: data.totalGlobalRoles || 0,
        icon: '/svg/role.svg',
      },
    ];
  }

  /** Handles the modal state */
  openModal(): void {
    this.modalVisible = true;
  }

  closeModal(): void {
    this.modalVisible = false;
  }

  /** Triggers save on the child form */

  /** Handles form submission success */
  handleFormSuccess(): void {
    this.modalVisible = false;
    this.fetchAllOrganizations();
  }

  /** Navigates to the organization detail page */
  handleViewOrganization(org: IOrganization): void {
    this.router.navigate(['/organization-detail'], { queryParams: { id: org.Id } });
  }

  systemOverview = [
    { label: 'Active Organizations', value: 20, icon: '/svg/organization.svg' },
    { label: 'Pending Requests', value: 5, icon: '/svg/pending.svg' },
    { label: 'Active Users', value: 180, icon: '/svg/user.svg' },
    { label: 'Banned Users', value: 3, icon: '/svg/user.svg' },
  ];

  activities = [
    { text: 'New user registered', time: '2 hours ago', icon: '/svg/user.svg' },
    { text: 'Organization updated', time: '1 day ago', icon: '/svg/organization.svg' },
    { text: 'Role permissions changed', time: '3 days ago', icon: '/svg/role.svg' },
  ];
}
