import { FormProvider } from "react-hook-form";

import { useRegister } from "@/screens/Register/register.hook";

import { CreateAccess } from "./CreateAccess";
import { FormSections, RegisterButton, RegisterForm } from "./styles";
import { WhatYouDo } from "./WhatYouDo";
import { WhoAreYou } from "./WhoAreYou";

export const Form = () => {
  const { methods, createAccount } = useRegister();

  return (
    <FormProvider {...methods}>
      <RegisterForm>
        <FormSections>
          <WhoAreYou />
          <WhatYouDo />
          <CreateAccess />
        </FormSections>
        <RegisterButton
          type="button"
          text="Cadastrar"
          loadingText="Cadastrando..."
          disabled={!methods.formState.isValid}
          width="100%"
          onAsyncClick={() => createAccount(methods.getValues())}
        />
      </RegisterForm>
    </FormProvider>
  );
};
