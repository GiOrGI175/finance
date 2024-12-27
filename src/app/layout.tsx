'use client';

import useAppBtn from '@/commons/hooks/setTrue';
import './globals.css';
import NavBar from '@/components/__molecules/NavBar';
import { usePathname } from 'next/navigation';
import { disableNavWithFooter } from '../components/__atoms/DisableNavWithFooter';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const setOverlay = useAppBtn((state) => state.setOverlay);
  const path = usePathname();
  return (
    <html lang='en' className='flex justify-center'>
      <body className='flex max-w-[3000px] w-full min-h-screen bg-[#F8F4F0] max-md:flex-col-reverse '>
        <div className='w-fit max-md:max-w-[1024px]: max-md:w-full max-md:fixed'>
          {!disableNavWithFooter.includes(path) && <NavBar />}
        </div>
        <div className='w-full '>{children}</div>
        {/* overlay start */}
        <div
          className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-10 ${
            setOverlay ? 'block' : 'hidden'
          } `}
        ></div>
        {/* overlay end */}
      </body>
    </html>
  );
}
