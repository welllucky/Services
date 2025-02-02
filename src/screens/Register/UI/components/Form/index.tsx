import { CustomButton } from "@/components";
import { useRegister } from "@/screens/Register/register.hook";
import { FormProvider } from "react-hook-form";
import { CreateAccess } from "./CreateAccess";
import { RegisterForm } from "./styles";
import { WhatYouDo } from "./WhatYouDo";
import { WhoAreYou } from "./WhoAreYou";

export const Form = () => {
  const { methods, createAccount } = useRegister();

  return (
    <FormProvider {...methods}>
      <RegisterForm onSubmit={methods.handleSubmit(createAccount)}>
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
