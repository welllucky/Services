import { CustomSelect } from "@/components";
import { theme } from "@/styles";

import { useRegister } from "@/screens/Register/register.hook";
import { useMemo } from "react";
import { Control, useFormContext } from "react-hook-form";
import { Section } from "../components";

export const WhatYouDo = () => {
  const { control } = useFormContext();
  const { roles, sectors, selectedSector } = useRegister();

  const isSectorInputDisabled = useMemo(() => !sectors?.length, [sectors]);
  const isRoleInputDisabled = useMemo(
    () => !selectedSector || !roles?.length,
    [roles, selectedSector],
  );

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
        options={sectors}
        isDisabled={isSectorInputDisabled}
      />
      <CustomSelect
        labelText="Cargo"
        id="role"
        placeholder="Qual o seu cargo?"
        width="100%"
        control={control as unknown as Control}
        options={roles}
        isDisabled={isRoleInputDisabled}
      />
    </Section>
  );
};
