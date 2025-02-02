import { IHttpResponse, OptionProps, RoleDto, SectorDto } from "@/types";
import { create } from "zustand";
import { RegisterStoreProps } from "./register.types";

export const registerStore = create<RegisterStoreProps>((set) => ({
  selectedSector: "",
  setSelectedSector: (sector: string) =>
    set({
      selectedSector: sector,
    }),
  sectorsOptions: [],
  setSectorsOptions: (sectorData: IHttpResponse<SectorDto[], unknown>) =>
    set({
      sectorsOptions: sectorData?.data?.map(
        (sector) =>
          ({
            text: sector?.name,
            value: sector?.id,
            key: sector?.id,
          }) as OptionProps,
      ),
    }),
  rolesOptions: [],
  setRolesOptions: (roleData: IHttpResponse<RoleDto[], unknown>) =>
    set({
      rolesOptions: roleData?.data?.map(
        (role) =>
          ({
            text: role?.name,
            value: role?.id,
            key: role?.id,
          }) as OptionProps,
      ),
    }),
}));
