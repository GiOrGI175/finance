import './globals.css';
import NavBar from '@/components/__molecules/NavBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='flex justify-center'>
      <body className='flex max-w-[3000px] w-full min-h-screen bg-[#F8F4F0]'>
        <div className='w-fit'>
          <NavBar />
        </div>
        <div className='w-full '>{children}</div>
      </body>
    </html>
  );
}
