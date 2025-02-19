import { create } from "zustand";

const usePopupStore = create((set) => ({
  thanksPopupDisplay: false,
  signPopupDisplay: false,
  signPopupType: "login",

  setThanksPopupDisplay: (value) => set({ thanksPopupDisplay: value }),
  setSignPopupDisplay: (value) => set({ signPopupDisplay: value }),
  setSignPopupType: (value) => set({ signPopupType: value }),
}));

export default usePopupStore;
