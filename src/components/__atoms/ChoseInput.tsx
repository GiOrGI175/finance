import React, { useState } from 'react';

type DropdownInputProps = {
  options: string[];
};

type DropdownInputState = {
  showDropdown: boolean;
  selectedOption: string;
};

const ChoseInput: React.FC<DropdownInputProps> = ({ options }) => {
  const [state, setState] = useState<DropdownInputState>({
    showDropdown: false,
    selectedOption: '',
  });

  const toggleDropdown = () => {
    setState((prevState) => ({
      ...prevState,
      showDropdown: !prevState.showDropdown,
    }));
  };

  const selectOption = (option: string) => {
    setState({ showDropdown: false, selectedOption: option });
  };

  return (
    <div className='relative'>
      <input
        type='text'
        value={state.selectedOption}
        onClick={toggleDropdown}
        className='w-full h-[40px] pl-3 pr-10 border rounded-md bg-[#201F24] text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
        readOnly
      />
      {state.showDropdown && (
        <div className='absolute w-full bg-white border rounded-md mt-1 z-10'>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => selectOption(option)}
              className='px-4 py-2 cursor-pointer hover:bg-gray-200'
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChoseInput;
