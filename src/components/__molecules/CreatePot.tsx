'use client';

import useAppBtn from '@/commons/hooks/setTrue';
import Image from 'next/image';
import ChoseInput from '../__atoms/ChoseInput';
import AddPot from '../__atoms/AddPot';

const CreatePot = () => {
  const showAddPot = useAppBtn((state) => state.showAddPot);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div
      className={`absolute  max-w-[560px] w-full h-[512px] rounded-[12px] bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 duration-500
        ${showAddPot ? 'block  opacity-[1]' : 'hidden  opacity-0'}`}
    >
      <div>
        <div>
          <h4>Add New Pot</h4>
          <div>
            <Image src='' width={20} height={20} alt='delete' />
          </div>
        </div>
        <p>
          Create a pot to set savings targets. These can help keep you on track
          as you save for special purchases.
        </p>
      </div>
      <div>
        <form>
          <div>
            <label>Pot Name</label>
            <input type='text' />
            <span>30 characters left</span>
          </div>
          <div>
            <label>Target</label>
            <input type='text' placeholder='$' />
          </div>
          <>
            <ChoseInput options={options} />
          </>
        </form>
      </div>
      <>
        <AddPot />
      </>
    </div>
  );
};

export default CreatePot;
