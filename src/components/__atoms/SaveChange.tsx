'use client';

import useAppBtn from '@/commons/hooks/setTrue';
import { FormType } from '../__organisms/PotsPage';
import axiosInstance from '@/commons/hooks/lib/axiosInstance';

type SaveChangeProps = {
  form: FormType;
  potID: string;
  fetchData: () => void;
  setError: (message: string) => void;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
};

const SaveChange: React.FC<SaveChangeProps> = ({
  form,
  potID,
  fetchData,
  setError,
  setForm,
}) => {
  const toggleEditPot = useAppBtn((state) => state.toggleEditPot);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);

  const handleUpdate = async (potID: string) => {
    try {
      await axiosInstance.put(`/pots/${potID}`, form);

      setForm({
        potName: '',
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
        toggleEditPot();
        handleUpdate(potID);
      }}
    >
      <span className='font-publicSans font-bold text-[14px] leading-[21px] text-[#FFFFFF]'>
        Save Change
      </span>
    </button>
  );
};

export default SaveChange;
