interface IRole {
  Id: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  Name: string;
}

interface IUserOrganizationRole {
  Id: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  Role: IRole;
}

interface IOrganization {
  Id: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  Name: string;
  Email: string;
  Phone: string | null;
  Address: string | null;
  Description: string | null;
}

interface UserOrganization {
  Id: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  Organization: IOrganization;
  UserOrganizationRole: IUserOrganizationRole[];
}

export interface IUser {
  Id: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  FullName: string;
  Email: string;
  UserOrganization: UserOrganization[];
}
