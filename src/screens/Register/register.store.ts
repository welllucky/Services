import { create } from "zustand";

import { OptionProps, RoleDto, SectorDto } from "@/types";

import { RegisterStoreProps } from "./register.types";

export const registerStore = create<RegisterStoreProps>((set) => ({
  selectedSector: "",
  setSelectedSector: (sector: string) =>
    set({
      selectedSector: sector,
    }),
  sectorsOptions: [],
  setSectorsOptions: (sectors: SectorDto[]) =>
    set({
      sectorsOptions: sectors?.map(
        (sector) =>
          ({
            text: sector?.name,
            value: sector?.name,
            key: sector?.id,
          }) as OptionProps,
      ),
    }),
  positionsOptions: [],
  setPositionsOptions: (positions: RoleDto[]) =>
    set({
      positionsOptions: positions?.map(
        (position) =>
          ({
            text: position?.name,
            value: position?.name,
            key: position?.id,
          }) as OptionProps,
      ),
    }),
}));
