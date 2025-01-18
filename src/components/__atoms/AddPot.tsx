'use client';

import axiosInstance from '@/commons/hooks/lib/axiosInstance';
import useAppBtn from '@/commons/hooks/setTrue';
import { FormType } from '../__organisms/PotsPage';

type AddPotPropsType = {
  fetchData: () => void;
  setError: (message: string) => void;
  formData: FormType;
  setFormData: React.Dispatch<React.SetStateAction<FormType>>;
};

const AddPot: React.FC<AddPotPropsType> = ({
  setError,
  fetchData,
  formData,
  setFormData,
}) => {
  const toggleAddPot = useAppBtn((state) => state.toggleAddPot);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);

  const postReq = async (formData: FormType) => {
    await axiosInstance.post('/pots', formData);

    setFormData({
      potName: '',
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
        toggleAddPot();
        postReq(formData);
      }}
    >
      <span className='font-publicSans font-bold text-[14px] leading-[21px] text-[#FFFFFF]'>
        Add Pot
      </span>
    </button>
  );
};

export default AddPot;
