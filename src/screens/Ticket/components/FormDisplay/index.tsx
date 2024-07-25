import { CustomFieldset } from "@/components/Fieldset";
import { SectionInfoForm } from "@/screens/OpenTicket/ConfirmMedia/styles";
import { theme } from "@/styles";
import { TicketDto } from "@/types";
import { dataFormatter } from "@/utils";
import { FormDisplayContainer } from "./styles";

type FormDisplayProps = {
  data: TicketDto | undefined;
};

export const FormDisplay = ({ data }: FormDisplayProps) => (
  <FormDisplayContainer>
    <CustomFieldset
      color={theme.colors.primary.default}
      labelText="Resumo"
      width="100%"
      height="64px"
      $justifyContent="center"
      $hasOverflow>
      {data?.resume}
    </CustomFieldset>
    <CustomFieldset
      color={theme.colors.primary.default}
      labelText="Descrição"
      width="100%"
      height="160px"
      $hasOverflow
      $justifyContent="start">
      {data?.description}
    </CustomFieldset>
    <SectionInfoForm $gap="16px">
      <CustomFieldset
        color={theme.colors.primary.default}
        labelText="Tipo"
        width="59%"
        height="64px">
        {data?.type}
      </CustomFieldset>
      <CustomFieldset
        color={theme.colors.primary.default}
        labelText="Prioridade"
        width="36%"
        height="64px">
        {data?.priority}
      </CustomFieldset>
    </SectionInfoForm>
    <CustomFieldset
      color={theme.colors.primary.default}
      labelText="Data do ocorrido"
      width="100%"
      height="64px">
      {dataFormatter(data?.date ?? "")}
    </CustomFieldset>
  </FormDisplayContainer>
);
