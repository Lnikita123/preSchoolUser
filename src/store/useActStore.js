import { create } from "zustand";

export const useActStore = create((set) => ({
  selected: true,
  setSelected: (selected) => set({ selected }),
  showActing: false,
  setShowActing: (showActing) => set({ showActing }),
  filteredData: {},
  setFilteredData: (newData) => set({ filteredData: newData }),
}));
