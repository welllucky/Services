import { ReactNode } from "react";
import ReactModal from "react-modal";

interface ContentStyleInterface {
  borderRadius?: string;
  border?: string;
  padding?: string;
  maxWidth?: string;
  maxHeight?: string;
  flexDirection?:
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | "initial";
  justifyContent?:
    | "space-between"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit"
    | "baseline"
    | "stretch";
  alignItems?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | "baseline"
    | "initial"
    | "inherit"
    | "start"
    | "end"
    | "self-start"
    | "self-end";
  boxShadow?: string;
}

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onAfterClose?: () => void;
  onAfterOpen?: () => void;
  onRequestClose?: () => void;
  shouldCloseOnEsc?: boolean;
  testId: string;
  closeTimeoutMS?: number;
  backgroundColor?: string;
  style?: {
    overlay?: {
      show?: boolean;
      zIndex?: number;
      backgroundColor?: string;
    };
    content?: ContentStyleInterface;
  };
  shouldFocusAfterRender?: boolean;
  shouldReturnFocusAfterClose?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  contentLabel?: string;
  preventScroll?: boolean;
}

export const CustomModal = ({
  children,
  testId,
  isOpen,
  onAfterClose,
  onAfterOpen,
  onRequestClose,
  closeTimeoutMS,
  contentLabel,
  shouldReturnFocusAfterClose,
  preventScroll = true,
  shouldFocusAfterRender = true,
  shouldCloseOnEsc = true,
  shouldCloseOnOverlayClick = true,
  style = { overlay: { show: true } },
  backgroundColor
}: ModalProps) => {
  ReactModal.setAppElement("body");
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          display: style?.overlay?.show ? "flex" : "none",
          zIndex: 100,
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        content: {
          zIndex: 101,
          position: "absolute",
          top: "30vh",
          maxWidth: style?.content?.maxWidth ?? "360px",
          maxHeight: style?.content?.maxHeight ?? "280px",
          padding: style?.content?.padding ?? "0px",
          borderRadius: style?.content?.borderRadius ?? "8px",
          border: style?.content?.border ?? "none",
          backgroundColor: backgroundColor ?? "#fff",
          display: "flex",
          flexDirection: style?.content?.flexDirection ?? "column",
          justifyContent: style?.content?.justifyContent ?? "space-between",
          alignItems: style?.content?.alignItems ?? "center",
          boxShadow:
            style?.content?.boxShadow ?? "0px 7px 14px 0px rgba(0, 0, 0, 0.25)",
          overflow: "hidden"
        }
      }}
      onAfterClose={onAfterClose}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc={shouldCloseOnEsc}
      testId={testId}
      closeTimeoutMS={closeTimeoutMS}
      shouldFocusAfterRender={shouldFocusAfterRender}
      shouldReturnFocusAfterClose={shouldReturnFocusAfterClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      contentLabel={contentLabel}
      preventScroll={preventScroll}>
      {children}
    </ReactModal>
  );
};

export type { ModalProps };
