/* eslint-disable no-unused-vars */
import {
  CreateAccountDto,
  IHttpResponse,
  OptionProps,
  RoleDto,
  SectorDto,
} from "@/types";

// eslint-disable-next-line no-unused-vars
export type onCreateAccountType = (accountData: CreateAccountDto) => void;

export interface RegisterStoreProps {
  selectedSector: string;
  setSelectedSector: (sector: string) => void;
  sectorsOptions: OptionProps[];
  setSectorsOptions: (sectorData: IHttpResponse<SectorDto[], unknown>) => void;
  rolesOptions: OptionProps[];
  setRolesOptions: (roleData: IHttpResponse<RoleDto[], unknown>) => void;
}
