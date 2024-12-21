'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Logo, BanerArrow, BanerArowHover } from '@/utility/images/ImgExport';
import logo_Short from '../../utility/images/Logo_short.svg';
import NavLinks from './NavLinks';

const NavBar = () => {
  const [arrowhover, setArrowhover] = useState(false);
  const [popUpNavBar, setPopUpNavBar] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem('PopUpShow');
      if (value) {
        setPopUpNavBar(JSON.parse(value));
      }
    }
  }, []);

  const handleSave = () => {
    if (typeof window !== 'undefined') {
      const newState = !popUpNavBar;
      localStorage.setItem('PopUpShow', JSON.stringify(newState));
      setPopUpNavBar(newState);
    }
  };

  return (
    <div
      className={`w-[300px] min-h-screen pt-[32px] pl-[32px] pr-[24px] bg-[#201F24] rounded-tr-[25px] rounded-br-[25px]  flex flex-col justify-between duration-1000 overflow-hidden ${
        popUpNavBar && 'w-[88px] pl-[0px] pr-[0px] pt-[40px]'
      } `}
    >
      <div>
        <div
          className={`w-full mb-[64px] flex duration-1000 ${
            popUpNavBar && 'justify-center'
          }`}
        >
          <Image
            src={popUpNavBar ? logo_Short : Logo}
            width={popUpNavBar ? 16 : 121}
            height={21}
            alt='logo duration-1000'
          />
        </div>
        <nav>
          <NavLinks popUpNavBar={popUpNavBar} />
        </nav>
      </div>

      <button
        className={`mb-[128px] w-full flex items-center   ${
          popUpNavBar && 'justify-center'
        } group `}
        onMouseMove={() => setArrowhover(true)}
        onMouseLeave={() => setArrowhover(false)}
        onClick={handleSave}
      >
        <Image
          src={arrowhover ? BanerArowHover : BanerArrow}
          width={24}
          height={24}
          alt='icon'
          className={`mr-[16px] ${popUpNavBar && 'mr-[0px] rotate-180'}`}
        />
        <span
          className={`duration-1000 font-publicSans font-bold leading-[24px] text-[#B3B3B3] text-[19px] group-hover:text-[#F2F2F2]  ${
            popUpNavBar && 'hidden'
          }`}
        >
          Minimize Menu
        </span>
      </button>
    </div>
  );
};

export default NavBar;
