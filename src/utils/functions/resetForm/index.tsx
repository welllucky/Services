import {
  LS_KEY_1_TICKET_RECORD,
  LS_KEY_2_TICKET_RECORD,
  LS_KEY_3_TICKET_RECORD,
  SS_KEY_DATA_WAS_RECOVERY,
} from "@/utils";

const resetForm = () => {
  localStorage.removeItem(LS_KEY_1_TICKET_RECORD);
  localStorage.removeItem(LS_KEY_2_TICKET_RECORD);
  localStorage.removeItem(LS_KEY_3_TICKET_RECORD);
  sessionStorage.removeItem(SS_KEY_DATA_WAS_RECOVERY);
};

export { resetForm };
