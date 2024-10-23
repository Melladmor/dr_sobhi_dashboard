import { IconType } from "@chakra-ui/icons";

export interface RoutesElemntsI {
  id: number;
  title: string;
  Icon: IconType;
  path: string;
  element: React.ComponentType<any>;
}

export interface RoutesI {
  id: number;
  path: string;
  title: string;
  Icon: IconType;
  element: React.ComponentType<any>;
  children?: routesElemntsT[];
}
