"use client";

import { SS_KEY_USER_PREVIOUS_PAGE } from "@/constraints";
import { useEffect } from "react";
import { useTheme } from "styled-components";
import { useOpenTicket } from "../OpenTicket.hook";
import ConfirmTicketPageUI from "./UI";

const ConfirmDetailsPage = () => {
  const { formData, recoverFormData } = useOpenTicket();

  const theme = useTheme();

  useEffect(() => {
    recoverFormData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      sessionStorage.setItem(SS_KEY_USER_PREVIOUS_PAGE, "form");
    };
  }, []);

  return (
    <ConfirmTicketPageUI
      theme={theme}
      data={formData}
    />
  );
};

export default ConfirmDetailsPage;
