'use client';

import { NavLinks } from '@/commons/hooks/NavBarData';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { it } from 'node:test';

const ResponsiveNavLinks = () => {
  const PathName = usePathname();

  return (
    <ul className='hidden max-md:flex w-full justify-between px-[40px] max-sm:px-[16px]'>
      {NavLinks.map((item) => {
        const isActive = PathName.startsWith(item.link);
        return (
          <li
            key={item.name}
            className={`max-w-[104px] w-full h-[66px] flex justify-center items-center rounded-tr-[8px] rounded-tl-[8px] duration-500  ${
              isActive && 'bg-white border-b-[4px] border-[#277C78]'
            }`}
          >
            <Link href={item.link} className='flex flex-col items-center'>
              <Image
                src={isActive ? item.icon_Active : item.icon}
                width={25}
                height={25}
                alt='icon'
              />
              <span
                className={`font-publicSans font-bold mt-[4px]  text-[12px] leading-[24px] group-hover:text-[#F2F2F2] duration-1000  ${
                  isActive
                    ? 'text-[#201F24] group-hover:text-[#201F24]'
                    : 'text-[#B3B3B3]'
                } max-sm:hidden `}
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

export default ResponsiveNavLinks;
