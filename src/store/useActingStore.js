import { create } from "zustand";

export const useActingStore = create((set) => ({
  showActing: false,
  setShowActing: (showActing) => set({ showActing }),
  address: "",
  setAddress: (address) => set({ address }),
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: (isMobileMenuOpen) => set({ isMobileMenuOpen }),
}));
