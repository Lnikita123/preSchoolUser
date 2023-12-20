import { create } from "zustand";

export const useActStore = create((set) => ({
  showActing: false,
  setShowActing: (showActing) => set({ showActing }),
  filteredData: {},
  setFilteredData: (newData) => set({ filteredData: newData }),
}));
