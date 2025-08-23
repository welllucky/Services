/* eslint-disable no-unused-vars */
import {
  CreateAccountDto,
  OptionProps,
  RoleDto,
  SectorDto,
} from "@/types";
import { UseFormReturn } from "react-hook-form";

// eslint-disable-next-line no-unused-vars
export type onCreateAccountType = (accountData: CreateAccountDto) => void;

export interface RegisterStoreProps {
  selectedSector: string;
  setSelectedSector: (sector: string) => void;
  sectorsOptions: OptionProps[];
  setSectorsOptions: (sectors: SectorDto[]) => void;
  positionsOptions: OptionProps[];
  setPositionsOptions: (positions: RoleDto[]) => void;
}

export interface RegisterHookProps {
  createAccount: onCreateAccountType;
  positions: OptionProps[];
  sectors: OptionProps[];
  methods: UseFormReturn<CreateAccountDto>;
  selectedSector: string;
}
