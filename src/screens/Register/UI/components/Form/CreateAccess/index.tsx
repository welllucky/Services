import { CustomInput } from "@/components";
import { theme } from "@/styles";
import { useFormContext } from "react-hook-form";
import { Section } from "../components";

export const CreateAccess = () => {
  const { control } = useFormContext();
  return (
    <Section
      title="Crie seu acesso"
      color={theme.colors.primary["145"]}>
      <CustomInput
        id="email"
        type="email"
        placeholder="Ex: joao.barros@l3.com"
        $status="none"
        width="100%"
        mode="outlined"
        labelText="Email"
        control={control}
      />
      <CustomInput
        labelText="Senha"
        id="password"
        type="password"
        placeholder="Digite sua senha"
        mode="outlined"
        $status="none"
        width="100%"
        control={control}
      />
    </Section>
  );
};
