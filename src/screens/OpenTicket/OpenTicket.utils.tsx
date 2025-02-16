import { LS_KEY_1_TICKET_RECORD } from "@/constraints";
import { IOpenTicketForm } from "@/types";

export const recoverFormDataFromLocalStorage = () => {
  try {
    const recoveredData = JSON.parse(
      localStorage.getItem(LS_KEY_1_TICKET_RECORD) as string,
    ) as IOpenTicketForm;

    return recoveredData;
  } catch {
    return null;
  }
};
