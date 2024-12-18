'use client';

import { useState } from 'react';
import { NavLinks } from '@/commons/hooks/NavBarData';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo, BanerArrow, BanerArowHover } from '@/utility/images/imgExport';
import logo_Short from '../../utility/images/Logo_short.svg';

const NavBar = () => {
  const PathName = usePathname();
  const [arrowhover, setArrowhover] = useState(false);
  const [popUpNavBar, setPopUpNavBar] = useState(false);

  return (
    <div
      className={`w-[300px] min-h-screen pt-[32px] pl-[32px] pr-[24px] bg-[#201F24] rounded-tr-[25px] rounded-br-[25px] fixed flex flex-col justify-between duration-500 ${
        popUpNavBar && 'w-[88px] pl-0 pr-0 pt-[40px]'
      } `}
    >
      <div>
        <div
          className={`w-full mb-[64px] flex duration-500 ${
            popUpNavBar && 'justify-center'
          }`}
        >
          <Image
            src={popUpNavBar ? logo_Short : Logo}
            width={popUpNavBar ? 16 : 121}
            height={21}
            alt='logo duration-500'
          />
        </div>
        <nav>
          <ul
            className={`duration-500 ${
              popUpNavBar && 'w-full flex flex-col justify-center items-center'
            }`}
          >
            {NavLinks.map((item) => {
              const isActive = PathName.startsWith(item.link);
              return (
                <li
                  key={item.name}
                  className={`mb-[4px] flex duration-500 ${
                    isActive && ' bg-white '
                  }rounded-tr-[12px] rounded-br-[12px]  ${
                    popUpNavBar &&
                    'rounded-[50%] w-[56px] h-[56px] rounded-tr-[50%] rounded-br-[50%] justify-center items-center'
                  }`}
                >
                  <Link
                    href={item.link}
                    className={`w-full h-[56px] duration-500 flex items-center ${
                      popUpNavBar && 'justify-center'
                    }  group`}
                  >
                    <Image
                      src={isActive ? item.icon_Active : item.icon}
                      width={25}
                      height={25}
                      alt='icon'
                      className={`mr-[16px]  ${popUpNavBar && 'mr-0'}`}
                    />
                    <span
                      className={`font-publicSans font-bold leading-[24px] group-hover:text-[#F2F2F2] duration-500  ${
                        isActive
                          ? 'text-[#201F24] group-hover:text-[#201F24]'
                          : 'text-[#B3B3B3]'
                      }  text-[19px] ${popUpNavBar && 'hidden'}`}
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <button
        className={`mb-[128px] w-full flex items-center   ${
          popUpNavBar && 'justify-center'
        } group `}
        onMouseMove={() => setArrowhover(true)}
        onMouseLeave={() => setArrowhover(false)}
        onClick={() => setPopUpNavBar((perv) => !perv)}
      >
        <Image
          src={arrowhover ? BanerArowHover : BanerArrow}
          width={24}
          height={24}
          alt='icon'
          className={`mr-[16px] ${popUpNavBar && 'mr-0 rotate-180'}`}
        />
        <span
          className={`duration-500 font-publicSans font-bold leading-[24px] text-[#B3B3B3] text-[19px] group-hover:text-[#F2F2F2]  ${
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
