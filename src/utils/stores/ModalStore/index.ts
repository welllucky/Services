import { create } from "zustand";

type ModalState = {
  isOpen: boolean;
  modalCallback?: () => void;
  open: () => void;
  close: () => void;
  // eslint-disable-next-line no-unused-vars
  setModalCallback: (callback: () => void) => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalCallback: undefined,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setModalCallback: (callback) => set({ modalCallback: callback }),
}));
