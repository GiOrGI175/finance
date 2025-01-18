'use client';

import useAppBtn from '@/commons/hooks/setTrue';
import { FormType2 } from '../__organisms/BudgetPage';
import axiosInstance from '@/commons/hooks/lib/axiosInstance';

type AddBudgetPropsType = {
  fetchData: () => void;
  setError: (message: string) => void;
  formData: FormType2;
  setFormData: React.Dispatch<React.SetStateAction<FormType2>>;
};

const AddBudget: React.FC<AddBudgetPropsType> = ({
  setError,
  fetchData,
  formData,
  setFormData,
}) => {
  const toggleshowAddBudget = useAppBtn((state) => state.toggleshowAddBudget);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);

  const postReq = async (formData: FormType2) => {
    await axiosInstance.post('/budgets', formData);

    setFormData({
      budgetName: '',
      Target: 0,
      theme: '',
    });
    try {
    } catch (error: any) {
      setError(error.message);
    } finally {
      fetchData();
    }
  };

  return (
    <button
      className='mt-[20px] w-full h-[53px] rounded-[8px] bg-[#201F24]'
      onClick={() => {
        toggleOverlay();
        toggleshowAddBudget();
        postReq(formData);
      }}
    >
      <span className='font-publicSans font-bold text-[14px] leading-[21px] text-[#FFFFFF]'>
        Add Budget
      </span>
    </button>
  );
};

export default AddBudget;
