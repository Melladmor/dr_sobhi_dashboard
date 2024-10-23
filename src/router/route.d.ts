export interface RoutesElemntsI {
  path: string;
  element: React.ComponentType<any>;
}

export interface RoutesI {
  path: string;
  element: React.ComponentType<any>;
  children?: routesElemntsT[];
}
