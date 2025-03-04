export interface IUserOrganization {
  // Define properties here
}

export interface IOrganization {
  Id?: string;
  CreatedAt: string;
  UpdatedAt?: string;
  Name: string;
  Email: string;
  Phone?: string;
  Address?: string;
  Description?: string;
  UserOrganization?: IUserOrganization[];
}
