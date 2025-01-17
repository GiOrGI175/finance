'use client';

import useAppBtn from '@/commons/hooks/setTrue';
import Image from 'next/image';
import ChoseInput from '../__atoms/ChoseInput';
import AddPot from '../__atoms/AddPot';
import { CloseBtn } from '@/utility/images/ImgExport';
import SaveChange from '../__atoms/SaveChange';
import { useEffect, useState } from 'react';
import { FormType } from '../__organisms/PotsPage';

type EditPotProps = {
  fetchData: () => void;
  potID: string;
  setError: (message: string) => void;
  form: FormType;
  setForm: React.Dispatch<React.SetStateAction<FormType>>;
  showChoseInput: boolean;
};

const EditPot: React.FC<EditPotProps> = ({
  fetchData,
  potID,
  setError,
  form,
  setForm,
  showChoseInput,
}) => {
  const showEditPot = useAppBtn((state) => state.showEditPot);
  const toggleEditPot = useAppBtn((state) => state.toggleEditPot);
  const toggleOverlay = useAppBtn((state) => state.toggleOverlay);

  const handleUpdateForm = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string | number
  ) => {
    const value = e.target.value;
    setForm((prevForm: any) => ({
      ...prevForm,
      [fieldName]: value,
    }));

    console.log(form);
  };
  return (
    <div
      className={`absolute  max-w-[560px] w-full h-[512px] rounded-[12px] p-[32px] bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 duration-500
        ${
          showEditPot ? 'block  opacity-[1]' : 'hidden  opacity-0'
        }   max-ss:max-w-[335px]   max-ss:h-fit`}
    >
      <div>
        <div className='flex justify-between mb-[20px]'>
          <h4 className='font-publicSans font-bold text-[32px] leading-[38px] text-[#201F24]  max-ss:text-[20px]  '>
            Edit Pot
          </h4>
          <button
            onClick={() => {
              toggleOverlay();
              toggleEditPot();
            }}
          >
            <Image src={CloseBtn} width={32} height={32} alt='delete' />
          </button>
        </div>
        <p className='mb-[20px] font-publicSans font-normal text-[14px] leading-[21px] text-[#696868]'>
          If your saving targets change, feel free to update your pots.
        </p>
      </div>
      <div>
        <form className=''>
          <div className='flex flex-col mb-[16px]'>
            <label className='mb-[4px] font-publicSans font-bold text-[12px] leading-[18px] text-[#696868]'>
              Pot Name
            </label>
            <input
              type='text'
              className='w-full h-[45px]  px-[20px] py-[14px] border-[1px] border-[#98908B] rounded-[8px]'
              value={form.potName}
              onChange={(e) => handleUpdateForm(e, 'potName')}
            />
            <span className='mt-[4px] text-end font-publicSans font-normal text-[12px] leading-[18px] text-[#696868]'>
              30 characters left
            </span>
          </div>
          <div className='flex flex-col mb-[16px]'>
            <label className='mb-[4px] font-publicSans font-bold text-[12px] leading-[18px] text-[#696868]'>
              Target
            </label>
            <input
              type='text'
              placeholder='$'
              className='w-full h-[45px] px-[20px] py-[14px] border-[1px] border-[#98908B] rounded-[8px]'
              value={form.Target}
              onChange={(e) => handleUpdateForm(e, 'Target')}
            />
          </div>
          <>
            {showChoseInput && (
              <ChoseInput handleUpdateForm={handleUpdateForm} form={form} />
            )}
          </>
        </form>
      </div>
      <>
        <SaveChange
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

export default EditPot;
