import { CustomButton } from "@/components";
import { IRegisterUser, RegisterUserSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CreateAccess } from "./CreateAccess";
import { RegisterForm } from "./styles";
import { WhatYouDo } from "./WhatYouDo";
import { WhoAreYou } from "./WhoAreYou";

export const Form = () => {
  const methods = useForm<IRegisterUser>({
    resolver: zodResolver(RegisterUserSchema),
    mode: "onChange",
  });

  const onSubmit = (data: IRegisterUser) => {
    console.log({ data });
    toast.success("Enviado!");
  };

  return (
    <FormProvider {...methods}>
      <RegisterForm onSubmit={methods.handleSubmit(onSubmit)}>
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
