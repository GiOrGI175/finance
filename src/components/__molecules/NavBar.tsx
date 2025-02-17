'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Logo, BanerArrow, BanerArowHover } from '@/utility/images/ImgExport';
import logo_Short from '../../utility/images/Logo_short.svg';
import NavLinks from './NavLinks';
import ResponsiveNavLinks from './ResponsiveNavLinks';
import { motion } from 'framer-motion';

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
    <motion.div
      className={`w-[300px] min-h-screen  pt-[32px]  pr-[24px] bg-[#201F24] rounded-tr-[25px] rounded-br-[25px]  flex flex-col justify-between  overflow-hidden relative z-30 duration-700 ${
        popUpNavBar && 'w-[88px] pl-[0px] !pt-[40px]  !pr-[0px] '
      }  max-md:w-full max-md:min-h-fit max-md:h-[74px] max-md:rounded-br-[0px] max-md:rounded-tr-[8px] max-md:rounded-tl-[8px] max-md:pl-[0px] max-md:pr-[0px] max-md:pt-[10px]  max-sm:h-[52px] `}
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
      viewport={{
        once: true,
      }}
    >
      <div>
        <div
          className={`w-full mb-[64px] flex duration-1000 ${
            popUpNavBar && 'justify-center'
          }  max-md:hidden`}
        >
          <Image
            src={popUpNavBar ? logo_Short : Logo}
            width={popUpNavBar ? 16 : 121}
            height={21}
            alt='logo duration-1000'
            className={`ml-[32px]  ${popUpNavBar && '!ml-[0px]'} `}
          />
        </div>
        <nav>
          <NavLinks popUpNavBar={popUpNavBar} />
          <ResponsiveNavLinks />
        </nav>
      </div>

      <button
        className={`mb-[128px] !w-full ml-[32px] flex items-center ${
          popUpNavBar && '!justify-center  !ml-[0px]'
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
          className={`mr-[16px]  ${
            popUpNavBar && '!mr-[0px] !rotate-180'
          } duration-1000`}
        />
        <span
          className={`duration-1000 font-publicSans font-bold leading-[24px] text-[#B3B3B3] text-[19px] group-hover:text-[#F2F2F2]  ${
            popUpNavBar && 'hidden'
          }`}
        >
          Minimize Menu
        </span>
      </button>
    </motion.div>
  );
};

export default NavBar;
