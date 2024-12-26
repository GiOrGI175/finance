'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Logo, BanerArrow, BanerArowHover } from '@/utility/images/ImgExport';
import logo_Short from '../../utility/images/Logo_short.svg';
import NavLinks from './NavLinks';
import ResponsiveNavLinks from './ResponsiveNavLinks';

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
      className={`w-[300px] min-h-screen pt-[32px]  bg-[#201F24] rounded-tr-[25px] rounded-br-[25px]  flex flex-col justify-between duration-1000 overflow-hidden ${
        popUpNavBar && 'w-[88px] !px-[0px] !pr-[0px] items-center '
      }  max-md:w-full max-md:min-h-fit max-md:h-[74px] max-md:rounded-br-[0px] max-md:rounded-tr-[8px] max-md:rounded-tl-[8px] max-md:pl-[0px] max-md:pr-[0px] max-md:pt-[10px]  max-sm:h-[52px] `}
    >
      <div className='max-md:w-full'>
        <div
          className={`w-full mb-[64px] flex ${
            popUpNavBar && 'justify-center'
          }  max-md:hidden`}
        >
          <Image
            src={popUpNavBar ? logo_Short : Logo}
            width={popUpNavBar ? 16 : 121}
            height={21}
            alt='logo'
            className={`${popUpNavBar ? 'ml-[0px] ' : 'ml-[32px]'}  `}
          />
        </div>
        <nav>
          <NavLinks popUpNavBar={popUpNavBar} />
          <ResponsiveNavLinks />
        </nav>
      </div>

      <button
        className={` mb-[128px] ml-[32px] w-full flex items-center   ${
          popUpNavBar && 'ml-[0px] justify-center'
        } max-md:hidden group `}
        onMouseMove={() => setArrowhover(true)}
        onMouseLeave={() => setArrowhover(false)}
        onClick={handleSave}
      >
        <Image
          src={arrowhover ? BanerArowHover : BanerArrow}
          width={24}
          height={24}
          alt='icon'
          className={`mr-[16px] duration-1000 ${
            popUpNavBar && 'mr-[0px] rotate-180 '
          }`}
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
