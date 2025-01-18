'use client';

import axiosInstance from '@/commons/hooks/lib/axiosInstance';
import useAppBtn from '@/commons/hooks/setTrue';
import { FormType2 } from '../__organisms/BudgetPage';

type SaveChangeBudgetProps = {
  form: FormType2;
  potID: string;
  fetchData: () => void;
  setError: (message: string) => void;
  setForm: React.Dispatch<React.SetStateAction<FormType2>>;
};

const SaveChangeBudget: React.FC<SaveChangeBudgetProps> = ({
  form,
  potID,
  fetchData,
  setError,
  setForm,
}) => {
  const toggleshowEditBudget = useAppBtn((state) => state.toggleshowEditBudget);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);

  const handleUpdate = async (potID: string) => {
    try {
      await axiosInstance.put(`/budgets/${potID}`, form);

      setForm({
        budgetName: '',
        Target: 0,
        theme: '',
      });

      fetchData();
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <button
      className='mt-[20px] w-full h-[53px] rounded-[8px] bg-[#201F24]'
      onClick={() => {
        toggleOverlay();
        toggleshowEditBudget();
        handleUpdate(potID);
      }}
    >
      <span className='font-publicSans font-bold text-[14px] leading-[21px] text-[#FFFFFF]'>
        Save Change
      </span>
    </button>
  );
};

export default SaveChangeBudget;
