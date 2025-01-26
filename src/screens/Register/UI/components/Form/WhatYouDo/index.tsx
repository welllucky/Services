import { CustomSelect } from "@/components";
import { theme } from "@/styles";
import { sectorApi } from "@/utils";
import { Control, useFormContext } from "react-hook-form";
import { Section } from "../components";

export const WhatYouDo = () => {
  const { control } = useFormContext();

  const res = sectorApi.getSectors();

  console.log({ res });
  return (
    <Section
      title="O que você faz?"
      color={theme.colors.primary["145"]}>
      <CustomSelect
        id="sector"
        placeholder="Qual setor você trabalha?"
        $status="none"
        width="100%"
        labelText="Setor"
        control={control as unknown as Control}
      />
      <CustomSelect
        labelText="Cargo"
        id="role"
        placeholder="Qual o seu cargo?"
        $status="none"
        width="100%"
        control={control as unknown as Control}
      />
    </Section>
  );
};
