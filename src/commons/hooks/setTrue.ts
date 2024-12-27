import { create } from 'zustand';

type useAppBtnState = {
  showAddPot: boolean;
  toggleAddPot: () => void;

  setOverlay: boolean;
  toggleOverlay: () => void;

  showEditPot: boolean;
  toggleEditPot: () => void;

  showDeletePot: boolean;
  toggleDeletePot: () => void;

  showWithdraw: boolean;
  toggleshowWithdrawPot: () => void;

  showAddMoney: boolean;
  toggleshowAddMoneyPot: () => void;

  showAddBudget: boolean;
  toggleshowAddBudget: () => void;

  showEditBudget: boolean;
  toggleshowEditBudget: () => void;

  showDeleteBudget: boolean;
  toggleDeleteBudget: () => void;
};

const useAppBtn = create<useAppBtnState>((set) => ({
  showAddPot: false,
  toggleAddPot: () => set((state) => ({ showAddPot: !state.showAddPot })),

  setOverlay: false,
  toggleOverlay: () => set((state) => ({ setOverlay: !state.setOverlay })),

  showEditPot: false,
  toggleEditPot: () => set((state) => ({ showEditPot: !state.showEditPot })),

  showDeletePot: false,
  toggleDeletePot: () =>
    set((state) => ({ showDeletePot: !state.showDeletePot })),

  showWithdraw: false,
  toggleshowWithdrawPot: () =>
    set((state) => ({ showWithdraw: !state.showWithdraw })),

  showAddMoney: false,
  toggleshowAddMoneyPot: () =>
    set((state) => ({ showAddMoney: !state.showAddMoney })),

  showAddBudget: false,
  toggleshowAddBudget: () =>
    set((state) => ({ showAddBudget: !state.showAddBudget })),

  showEditBudget: false,
  toggleshowEditBudget: () =>
    set((state) => ({ showEditBudget: !state.showEditBudget })),

  showDeleteBudget: false,
  toggleDeleteBudget: () =>
    set((state) => ({ showDeleteBudget: !state.showDeleteBudget })),
}));

export default useAppBtn;
