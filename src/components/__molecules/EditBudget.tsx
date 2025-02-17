'use client';

import useAppBtn from '@/commons/hooks/setTrue';
import Image from 'next/image';
import ChoseInput from '../__atoms/ChoseInput';
import AddPot from '../__atoms/AddPot';
import { CloseBtn } from '@/utility/images/ImgExport';
import SaveChange from '../__atoms/SaveChange';
import SaveChangeBudget from '../__atoms/SaveChangeBudget';
import { FormType2 } from '../__organisms/BudgetPage';
import ChoseInputButget from '../__atoms/ChoseInputButget';
import UpdateInputCategoty from '../__atoms/UpdateInputCategoty';

type EditBudgetProps = {
  fetchData: () => void;
  potID: string;
  setError: (message: string) => void;
  form: FormType2;
  setForm: React.Dispatch<React.SetStateAction<FormType2>>;
};

const EditBudget: React.FC<EditBudgetProps> = ({
  fetchData,
  potID,
  setError,
  form,
  setForm,
}) => {
  const showEditBudget = useAppBtn((state) => state.showEditBudget);
  const toggleshowEditBudget = useAppBtn((state) => state.toggleshowEditBudget);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);

  const handleUpdateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div
      className={`absolute  max-w-[560px] w-full h-[512px] rounded-[12px] p-[32px] bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 duration-500
        ${
          showEditBudget ? 'block  opacity-[1]' : 'hidden  opacity-0'
        }   max-ss:max-w-[335px]   max-ss:h-fit`}
    >
      <div>
        <div className='flex justify-between mb-[20px]'>
          <h4 className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]  max-ss:text-[20px]  '>
            Edit Budget
          </h4>
          <button
            onClick={() => {
              toggleOverlay();
              toggleshowEditBudget();
            }}
          >
            <Image src={CloseBtn} width={32} height={32} alt='delete' />
          </button>
        </div>
        <p className='mb-[20px] font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]'>
          As your budgets change, feel free to update your spending limits.
        </p>
      </div>
      <div>
        <form className=''>
          <div className='flex flex-col mb-[16px]'>
            <>
              <UpdateInputCategoty form={form} setForm={setForm} />
            </>
            <span className='mt-[4px] text-end font-publicSans font-normal text-[12px] leading-[18px] text-[#696868]'>
              30 characters left
            </span>
          </div>
          <div className='flex flex-col mb-[16px]'>
            <label className='mb-[4px] font-publicSans font-bold text-[12px] leading-[18px] text-[#696868]'>
              Target
            </label>
            <input
              type='number'
              placeholder='$'
              className='w-full h-[45px] px-[20px] py-[14px] border-[1px] border-[#98908B] rounded-[8px]'
              name='Target'
              value={form.Target}
              onChange={handleUpdateForm}
            />
          </div>
          <>
            <ChoseInputButget form={form} setForm={setForm} />
          </>
        </form>
      </div>
      <>
        <SaveChangeBudget
          form={form}
          potID={potID}
          fetchData={fetchData}
          setError={setError}
          setForm={setForm}
        />
      </>
    </div>
  );
};

export default EditBudget;
