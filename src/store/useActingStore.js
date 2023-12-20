import { create } from "zustand";
import { persist } from "zustand/middleware";

const useActingStore = create(
  persist(
    (set) => ({
      address: "",
      setAddress: (address) => set({ address }),
      isMobileMenuOpen: false,
      setIsMobileMenuOpen: (isMobileMenuOpen) => set({ isMobileMenuOpen }),
      showModal: false,
      setShowModal: (showModal) => set({ showModal }),
      navState: {
        activeNav: "Home",
        showImage: false,
      },
      setNavState: (newState) =>
        set((state) => ({
          navState: { ...state.navState, ...newState },
        })),
      filteredData: {},
      setFilteredData: (newData) => set({ filteredData: newData }),
    }),
    {
      name: "acting",
      getStorage: () => localStorage,
    }
  )
);

export { useActingStore };
