'use client';

import { NavLinks } from '@/commons/hooks/NavBarData';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type PopUpNavBarProps = {
  popUpNavBar: boolean;
};

const NavLinksArr: React.FC<PopUpNavBarProps> = ({ popUpNavBar }) => {
  const PathName = usePathname();

  return (
    <ul className={`duration-1000   max-md:hidden `}>
      {NavLinks.map((item) => {
        const isActive = PathName.startsWith(item.link);
        return (
          <li
            key={item.name}
            className={`max-w-[276px] min-w-[56px] w-full mb-[4px] pl-[32px] flex duration-1000  ${
              isActive && 'bg-white border-l-[4px] border-[#277C78] '
            } rounded-tr-[12px] rounded-br-[12px]  ${
              popUpNavBar &&
              '  !rounded-full !border-[0px]  !pl-[0px] justify-center items-center '
            }`}
          >
            <Link
              href={item.link}
              className={`w-full h-[56px] duration-1000  flex items-center ${
                popUpNavBar && 'justify-center items-center'
              }  group`}
            >
              <Image
                src={isActive ? item.icon_Active : item.icon}
                width={25}
                height={25}
                alt='icon'
                className={`mr-[16px]  ${popUpNavBar && '!mr-[0px]'}`}
              />
              <span
                className={`font-publicSans font-bold leading-[24px] group-hover:text-[#F2F2F2] duration-1000  ${
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
  );
};

export default NavLinksArr;
