"use client";

import {
  LS_KEY_1_TICKET_RECORD,
  LS_KEY_2_TICKET_RECORD,
  LS_KEY_3_TICKET_RECORD,
} from "@/utils";

const resetForm = () => {
  localStorage.removeItem(LS_KEY_1_TICKET_RECORD);
  localStorage.removeItem(LS_KEY_2_TICKET_RECORD);
  localStorage.removeItem(LS_KEY_3_TICKET_RECORD);
};

export { resetForm };
