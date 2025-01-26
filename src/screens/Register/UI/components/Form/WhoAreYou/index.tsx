import { CustomInput } from "@/components";
import { theme } from "@/styles";
import { IRegisterUser } from "@/types";
import { Control, useFormContext } from "react-hook-form";
import { Section } from "../components";

export const WhoAreYou = () => {
  const { control } = useFormContext<IRegisterUser>();

  return (
    <Section
      title="Quem é você?"
      color={theme.colors.primary["145"]}>
      <CustomInput
        id="register"
        type="text"
        placeholder="Ex: 943432323"
        width="100%"
        mode="outlined"
        labelText="Matrícula"
        control={control as unknown as Control}
        isRequired
      />
      <CustomInput
        labelText="Nome"
        id="name"
        type="text"
        placeholder="Ex: João de Barros"
        mode="outlined"
        width="100%"
        control={control as unknown as Control}
        isRequired
      />
    </Section>
  );
};
