import { CustomSelect } from "@/components";
import { theme } from "@/styles";
import { OptionProps } from "@/types";
import { enterpriseApi } from "@/utils";
import { useMemo } from "react";
import { Control, useFormContext } from "react-hook-form";
import { Section } from "../components";

export const WhatYouDo = () => {
  const { control, watch } = useFormContext();
  const selectedSector = watch("sector");

  const { data: sectors } = enterpriseApi.getSectors();
  const { data: roles } = enterpriseApi.getRolesBySector({
    sectorId: selectedSector,
    shouldFetch: !!selectedSector,
  });

  const sectorOptions = useMemo(() => {
    return sectors?.data?.map(
      (sector) =>
        ({
          text: sector?.name,
          value: sector?.id,
          key: sector?.id,
        }) as OptionProps,
    );
  }, [sectors]);

  const roleOptions = useMemo(() => {
    return roles?.data?.map(
      (role) =>
        ({
          text: role?.name,
          value: role?.id,
          key: role?.id,
        }) as OptionProps,
    );
  }, [roles]);

  console.log({ sectorOptions, sectors });

  return (
    <Section
      title="O que você faz?"
      color={theme.colors.primary["145"]}>
      <CustomSelect
        id="sector"
        placeholder="Qual setor você trabalha?"
        width="100%"
        labelText="Setor"
        control={control as unknown as Control}
        options={sectorOptions}
      />
      <CustomSelect
        labelText="Cargo"
        id="role"
        placeholder="Qual o seu cargo?"
        width="100%"
        control={control as unknown as Control}
        options={roleOptions}
        isDisabled={!selectedSector}
      />
    </Section>
  );
};
