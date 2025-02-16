"use client";

import { SS_KEY_USER_PREVIOUS_PAGE } from "@/utils";
import { useEffect } from "react";
import { useTheme } from "styled-components";
import { useOpenTicket } from "../OpenTicket.hook";
import { ConfirmMediaPageUI } from "./UI";

export const ConfirmDetailsPage = () => {
  const { formData, recoverFormData, sendTicketRegister, isModalOpen } =
    useOpenTicket();

  const theme = useTheme();

  useEffect(() => {
    recoverFormData();
  }, []);

  useEffect(
    () => () => {
      sessionStorage.setItem(SS_KEY_USER_PREVIOUS_PAGE, "form");
    },
    [],
  );

  return (
    <ConfirmMediaPageUI
      theme={theme}
      data={formData}
      isModalOpen={isModalOpen}
      modalCallback={sendTicketRegister}
    />
  );
};
