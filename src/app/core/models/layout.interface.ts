export interface ISubModule {
  Name: string;
}

export interface IModule {
  Name: string;
  icon: string;
  route: string;
  ModuleCode?: string;
  ParentModules?: IModule[];
  SubModules?: IModule[];
}
