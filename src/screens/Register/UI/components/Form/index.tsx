import { CustomButton } from "@/components";
import { RegisterFormProps } from "@/screens/Register/register.types";
import { CreateAccountDto, CreateAccountSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { CreateAccess } from "./CreateAccess";
import { RegisterForm } from "./styles";
import { WhatYouDo } from "./WhatYouDo";
import { WhoAreYou } from "./WhoAreYou";

export const Form = ({ onCreateAccount }: RegisterFormProps) => {
  const methods = useForm<CreateAccountDto>({
    resolver: zodResolver(CreateAccountSchema),
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <RegisterForm onSubmit={methods.handleSubmit(onCreateAccount)}>
        <WhoAreYou />
        <WhatYouDo />
        <CreateAccess />
        <CustomButton
          type="submit"
          text="Cadastrar"
          disabled={!methods.formState.isValid}
        />
      </RegisterForm>
    </FormProvider>
  );
};
