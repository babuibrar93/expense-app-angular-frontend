import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { API_ENDPOINTS } from '../../core/constants/api-endpoint.constant';
import { IApiResponse } from '../../core/models/basic.interface';
import { IOrganization } from '../../core/models/organization.interface';
import { DateFormatPipe } from '../../core/pipes/date.pipe';
import { ApiService } from '../../core/services/api.service';
import { CreateOrganizationComponent } from '../create-organization/create-organization.component';

@Component({
  selector: 'app-organizations',
  standalone: false,
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.css',
})
export class OrganizationsComponent implements OnInit {
  /** Child component reference */
  @ViewChild(CreateOrganizationComponent) createOrgForm!: CreateOrganizationComponent;

  /** Component State Variables */
  loadingOrgs = false;
  searchQuery = '';
  modalVisible = false;
  deleteModalVisible = false;
  organizationModalText = 'Add new Organization';
  modifiedOrganizations: IOrganization[] = [];
  organizationDetail!: IOrganization | any;

  /** Table Configuration */
  columns = [
    { key: 'Name', label: 'Name', isSortable: true },
    { key: 'Email', label: 'Email', isSortable: true },
    { key: 'Phone', label: 'Phone', isSortable: true },
    { key: 'Address', label: 'Address', isSortable: false },
    { key: 'Users', label: 'Number of Users', isSortable: false },
    { key: 'CreatedAt', label: 'Created At', isSortable: true },
  ];

  actions = [
    {
      icon: 'edit',
      tooltip: 'Edit',
      color: 'text-muted',
      action: (row: IOrganization) => this.editOrganization(row),
    },
    {
      icon: 'visibility',
      tooltip: 'View Details',
      color: 'text-muted',
      action: (row: IOrganization) =>
        this.router.navigate(['/organization-detail'], { queryParams: { id: row.Id } }),
    },
    {
      icon: 'delete',
      tooltip: 'Delete',
      color: 'text-danger',
      action: (row: IOrganization) => this.deleteOrganization(row),
    },
  ];

  /** Dependency Injection */
  constructor(
    private readonly router: Router,
    private readonly apiService: ApiService,
    private readonly dateFormatPipe: DateFormatPipe
  ) {}

  /** Lifecycle Hooks */
  ngOnInit(): void {
    this.fetchAllOrganizations();
  }

  /** Event Handlers */
  openModal() {
    this.modalVisible = true;
    this.organizationModalText = 'Add new Organization';
  }

  closeModal() {
    this.modalVisible = false;
    this.organizationDetail = {};
  }

  closeDeleteModal() {
    this.deleteModalVisible = false;
    this.organizationDetail = {};
  }

  editOrganization(org: IOrganization) {
    this.modalVisible = true;
    this.organizationDetail = org;
    this.organizationModalText = 'Edit Organization';
  }

  deleteOrganization(org: IOrganization) {
    this.organizationDetail = org;
    this.deleteModalVisible = true;
  }

  handleSaveOrganization(): void {
    if (this.createOrgForm) {
      this.createOrgForm.saveOrganization();
    }
  }

  handleFormSuccess(): void {
    this.modalVisible = false;
    this.fetchAllOrganizations();
  }

  handleDeleteOrganization() {
    if (this.organizationDetail) {
      this.apiService
        .delete(`${API_ENDPOINTS.ORGANIZATION.DELETE_ORGANIZATION}/${this.organizationDetail?.Id}`)
        .subscribe(() => {
          this.fetchAllOrganizations();
          this.closeDeleteModal();
        });
    }
  }

  /** Service Calls */
  private fetchAllOrganizations(): void {
    this.loadingOrgs = true;
    this.apiService
      .get<IApiResponse>(API_ENDPOINTS.ORGANIZATION.FETCH_ALL_ORGANIZATION, {
        sortBy: 'CreatedAt',
        order: 'DESC',
      })
      .subscribe((response) => {
        this.modifiedAllOrganizations(response.data?.organizations);
        this.loadingOrgs = false;
      });
  }

  /** Helper Methods */
  private modifiedAllOrganizations(organizations: IOrganization[]) {
    this.modifiedOrganizations = organizations?.map((organization) => ({
      Id: organization.Id,
      Name: organization.Name,
      Email: organization.Email,
      Phone: organization.Phone,
      Address: organization.Address,
      Description: organization.Description,
      Users: organization.UserOrganization?.length,
      CreatedAt: this.dateFormatPipe.transform(organization.CreatedAt),
    }));
  }
}
