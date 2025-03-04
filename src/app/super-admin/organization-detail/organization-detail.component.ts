import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { API_ENDPOINTS } from '../../core/constants/api-endpoint.constant';
import { IApiResponse, IAutoCompleOptions } from '../../core/models/basic.interface';
import { DateFormatPipe } from '../../core/pipes/date.pipe';
import { ApiService } from '../../core/services/api.service';
import {
  TableAction,
  TableColumn,
} from '../../shared/components/custom-table/custom-table.component';
import { IOrganization } from '../../core/models/organization.interface';
import { CreateOrganizationComponent } from '../create-organization/create-organization.component';
import { FormService } from '../../core/services/form.service';
import { LoadingService } from '../../core/services/loading.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-organization-detail',
  standalone: false,
  templateUrl: './organization-detail.component.html',
  styleUrl: './organization-detail.component.css',
})
export class OrganizationDetailComponent implements OnInit {
  @ViewChild(CreateOrganizationComponent) createOrgForm!: CreateOrganizationComponent;

  id: string = '';
  transformedData = [];
  organizationDetail: IOrganization = {} as IOrganization;
  roles!: any;

  modalVisible = false;
  addUserModalVisible = false;
  deleteModalVisible = false;
  selectedUser: string = '';
  selectedRole!: IAutoCompleOptions;
  deleteOrganizationModalVisible = false;
  assignedUsers: { name: string; role: string; id: number }[] = [];
  registerForm!: FormGroup;
  isLoading$!: Observable<boolean>;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly apiService: ApiService,
    private readonly dateFormatPipe: DateFormatPipe,
    public formService: FormService,
    private loadingService: LoadingService,
    private fb: FormBuilder
  ) {}

  private readonly formConfig = {
    fullName: {
      value: '',
      disabled: false,
      validators: [Validators.required, Validators.minLength(6)],
    },
    email: { value: '', disabled: false, validators: [Validators.required, Validators.email] },
    password: {
      value: '',
      disabled: false,
      validators: [Validators.required, Validators.minLength(6)],
    },
  };

  ngOnInit(): void {
    this.initializeForm();
    this.fetchAllRoles();
    this.fetchOrganizationDetail();
    this.isLoading$ = this.loadingService.loading$;
  }

  private initializeForm(): void {
    this.registerForm = this.formService.initializeForm(this.formConfig);
  }

  // Get form control dynamically in template
  getControl(controlName: string): FormControl {
    return this.formService.getControl(this.registerForm, controlName);
  }

  private fetchOrganizationDetail() {
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id') || '';

    this.apiService
      .get<IApiResponse>(`${API_ENDPOINTS.ORGANIZATION.FETCH_ONE_ORGANIZATION}/${this.id}`)
      .subscribe((response) => {
        this.organizationDetail = response.data;
        this.fetchOrganizationUsers(response.data.UserOrganization);
      });
  }

  private fetchOrganizationUsers(userOrganization: any) {
    this.transformedData = userOrganization.map((org: any) => ({
      name: org.User.FullName,
      email: org.User.Email,
      role: org.UserOrganizationRole.map((role: any) => role.Role.Name).join(', '),
      createdAt: this.dateFormatPipe.transform(org.CreatedAt),
      updatedAt: this.dateFormatPipe.transform(org.UpdatedAt),
    }));
  }

  private fetchAllRoles() {
    this.apiService.get<IApiResponse>(API_ENDPOINTS.ROLE.FETCH_ALL_ROLE).subscribe((response) => {
      this.roles = response?.data?.map((role: any) => ({
        id: role.Id,
        value: role.Name,
      }));
    });
  }

  handleAddUser() {
    if (this.registerForm.invalid) {
      Object.keys(this.registerForm.controls).forEach((key) => {
        this.registerForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.apiService
      .post<IApiResponse>(API_ENDPOINTS.USER.ADD_USER, {
        ...this.registerForm.value,
        OrganizationId: this.id,
        RoleId: this.selectedRole?.id,
      })
      .subscribe((response) => {
        // After successful creation, refresh the user list
        this.fetchOrganizationDetail();
        this.registerForm.reset();
      });
  }

  /** Triggers save on the child form */
  handleSaveOrganization(): void {
    if (this.createOrgForm) {
      this.createOrgForm.saveOrganization();
    }
  }

  /** Handles form submission success */
  handleFormSuccess(): void {
    this.modalVisible = false;
    this.fetchOrganizationDetail();
  }

  hanldeDeleteOrganization() {
    this.apiService
      .delete(`${API_ENDPOINTS.ORGANIZATION.DELETE_ORGANIZATION}/${this.organizationDetail?.Id}`)
      .subscribe(() => this.router.navigate(['/']));
  }

  handleRoleSelect(option: IAutoCompleOptions) {
    this.selectedRole = option;
  }

  openModal() {
    this.modalVisible = true;
    this.organizationDetail = this.organizationDetail;
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

  actions: TableAction[] = [
    { icon: 'edit', tooltip: 'Edit', color: 'text-muted', action: (row) => this.editRow(row) },
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
