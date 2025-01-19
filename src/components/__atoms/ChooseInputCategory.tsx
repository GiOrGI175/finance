import React, { useState, useEffect } from 'react';
import { CategoryOptions } from '@/commons/hooks/PotsData';
import { FormType2 } from '../__organisms/BudgetPage';

type ChooseInputCategoryProps = {
  formData: FormType2;
  setFormData: React.Dispatch<React.SetStateAction<FormType2>>;
};

type DropdownInputState = {
  showDropdown: boolean;
  selectedOption: string;
};

const ChooseInputCategory: React.FC<ChooseInputCategoryProps> = ({
  formData,
  setFormData,
}) => {
  const [state, setState] = useState<DropdownInputState>({
    showDropdown: false,
    selectedOption: formData.budgetName || '',
  });

  const toggleDropdown = () => {
    setState((prevState) => ({
      ...prevState,
      showDropdown: !prevState.showDropdown,
    }));
  };

  const selectOption = (option: string) => {
    setState({
      showDropdown: false,
      selectedOption: option,
    });

    setFormData((prevForm) => ({ ...prevForm, budgetName: option }));
  };

  return (
    <div className='relative'>
      <label className='mb-[4px] font-publicSans font-bold text-[12px] leading-[18px] text-[#696868]'>
        Theme
      </label>
      <div className='relative top-[35px] left-[20px] w-fit flex items-center'>
        {state.selectedOption && (
          <>
            <span>{state.selectedOption}</span>
          </>
        )}
      </div>
      <input
        type='text'
        value={state.selectedOption}
        onClick={toggleDropdown}
        className='w-full h-[45px] px-[20px] py-[14px] text-white border-[1px] border-[#98908B] rounded-[8px]'
        readOnly
      />
      {state.showDropdown && (
        <div className='absolute w-full h-[150px] overflow-x-hidden overflow-scroll bg-white border rounded-md mt-[16px] z-10 drop-shadow-lg'>
          {CategoryOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => selectOption(option.value)}
              className='px-4 py-2 cursor-pointer hover:bg-gray-200'
            >
              <div className='flex items-center pb-[12px] border-b-[1px] border-[#F2F2F2]'>
                {option.value}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChooseInputCategory;
