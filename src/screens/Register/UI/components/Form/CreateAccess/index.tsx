import { ClosedEyeIcon, EyeIcon } from "@/assets";
import { CustomInput } from "@/components";
import { theme } from "@/styles";
import { useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Section } from "../components";

export const CreateAccess = () => {
  const { control } = useFormContext();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = useCallback(() => {
    setPasswordVisible(!passwordVisible);
  }, [passwordVisible]);

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
        type={passwordVisible ? "text" : "password"}
        placeholder="Digite sua senha"
        mode="outlined"
        $status="none"
        width="100%"
        control={control}
        trailingButton={
                passwordVisible ? (
                  <ClosedEyeIcon
                    color="#49454F"
                    size={32}
                    onClick={handlePasswordVisibility}
                  />
                ) : (
                  <EyeIcon
                    color="#49454F"
                    size={32}
                    onClick={handlePasswordVisibility}
                  />
                )
              }
      />
    </Section>
  );
};
