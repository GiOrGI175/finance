import { create } from 'zustand';

type useAppBtnState = {
  showAddPot: boolean;
  toggleAddPot: () => void;

  setOverlay: boolean;
  toggleOverlay: () => void;
};

const useAppBtn = create<useAppBtnState>((set) => ({
  showAddPot: false,
  toggleAddPot: () => set((state) => ({ showAddPot: !state.showAddPot })),

  setOverlay: false,
  toggleOverlay: () => set((state) => ({ setOverlay: !state.setOverlay })),
}));

export default useAppBtn;
