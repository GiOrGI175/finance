import React, { useState, useEffect } from 'react';
import { options } from '@/commons/hooks/PotsData';
import { FormType } from '../__organisms/PotsPage';

type DropdownInputState = {
  showDropdown: boolean;
  selectedOption: string;
  selectedColor: string;
};

type ChoseInputProps = {
  handleUpdateForm: (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof FormType
  ) => void;
  form: FormType;
};

const ChoseInput: React.FC<ChoseInputProps> = ({ handleUpdateForm, form }) => {
  const [state, setState] = useState<DropdownInputState>({
    showDropdown: false,
    selectedOption: form?.theme ?? '',
    selectedColor: '',
  });

  useEffect(() => {
    if (form?.theme) {
      setState((prevState) => ({
        ...prevState,
        selectedOption: form.theme,
      }));
    }
  }, [form?.theme]);

  const toggleDropdown = () => {
    setState((prevState) => ({
      ...prevState,
      showDropdown: !prevState.showDropdown,
    }));
  };

  const selectOption = (option: string, color: string) => {
    setState({
      showDropdown: false,
      selectedOption: option,
      selectedColor: color,
    });
  };

  return (
    <div className='relative'>
      <label className='mb-[4px] font-publicSans font-bold text-[12px] leading-[18px] text-[#696868]'>
        Theme
      </label>
      <div className='relative top-[35px] left-[20px] w-fit flex items-center'>
        {state.selectedOption && (
          <>
            <div
              className='inline-block w-[16px] h-[16px] mr-[8px] rounded-full'
              style={{ background: state.selectedColor }}
            />
            <span>{state.selectedOption}</span>
          </>
        )}
      </div>
      <input
        type='text'
        value={form?.theme}
        onClick={toggleDropdown}
        onChange={(e) => handleUpdateForm(e, 'theme')}
        className='w-full h-[45px] px-[20px] py-[14px] text-white border-[1px] border-[#98908B] rounded-[8px]'
        readOnly
      />
      {state.showDropdown && (
        <div className='absolute w-full h-[150px] overflow-x-hidden overflow-scroll bg-white border rounded-md mt-[16px] z-10 drop-shadow-lg'>
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => selectOption(option.value, option.color)}
              className='px-4 py-2 cursor-pointer hover:bg-gray-200'
            >
              <div className='flex items-center pb-[12px] border-b-[1px] border-[#F2F2F2]'>
                <div
                  className='w-[16px] h-[16px] mr-[12px] rounded-full'
                  style={{ background: option.color }}
                />
                {option.value}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChoseInput;
