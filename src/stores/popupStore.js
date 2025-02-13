import { create } from "zustand";

const usePopupStore = create((set) => ({
  thanksPopupDisplay: false,

  setThanksPopupDisplay: (value) => set({ thanksPopupDisplay: value }),
}));

export default usePopupStore;
